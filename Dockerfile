# Build stage for frontend
FROM node:20-alpine AS frontend-build
WORKDIR /app/frontend

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Build stage for backend
FROM python:3.9-slim AS backend-build
WORKDIR /app/backend

# Copy backend requirements
COPY backend/requirements.txt .

# Install backend dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend code
COPY backend/ .

# Final stage
FROM nginx:alpine

# Copy frontend built assets
COPY --from=frontend-build /app/frontend/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create directory for backend
WORKDIR /app/backend

# Copy backend from backend-build
COPY --from=backend-build /app/backend /app/backend
COPY --from=backend-build /usr/local/lib/python3.9/site-packages /usr/local/lib/python3.9/site-packages
COPY --from=backend-build /usr/local/bin/python /usr/local/bin/python

# Expose ports
EXPOSE 80 5000

# Start both services using a shell script
COPY <<EOF /start.sh
#!/bin/sh
cd /app/backend && python app.py &
nginx -g 'daemon off;'
EOF

RUN chmod +x /start.sh

CMD ["/start.sh"]