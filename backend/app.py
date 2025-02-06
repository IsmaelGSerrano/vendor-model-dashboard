from flask import Flask, jsonify
from flask_cors import CORS
from azure.storage.blob import BlobServiceClient, ContainerClient
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app, resources={
    r"/*": {
        "origins": ["http://localhost", "http://localhost:80", "http://localhost:8080", "http://127.0.0.1", "http://127.0.0.1:80", "http://127.0.0.1:8080"],
        "methods": ["GET"],
        "allow_headers": ["Content-Type"]
    }
})

# Mock data as fallback
MOCK_DATA = {
    "companies": [
        {
            "company_name": "Tech Corp",
            "vendors_list": [
                {
                    "vendor": "xxx1",
                    "vendor_name": "Lovable",
                    "size": 6,
                    "avg_lines": 1.0,
                    "category": "one-template",
                    "models": [
                        {
                            "model_name": "Dune Model",
                            "model_type": "dune",
                            "status": 1,
                            "last_data": "2024-03-28",
                            "ready_date": "2025-01-08 09:01:03",
                            "model_last_date_trained": "2024-03-28",
                            "training_date": "2025-01-08 11:09:35",
                            "score": 1,
                            "published_date": "2025-01-08 11:28:02",
                            "model_last_date_published": "2024-03-28",
                            "registered_date": "2025-01-09 13:56:25",
                            "model_last_date_registered": "2024-03-28",
                            "deployment_date": "2025-01-13 12:30:01",
                            "model_last_date_deployed": "2024-03-28"
                        }
                    ],
                    "model_version": 30,
                    "model_name": "mdl_alice",
                    "endpoint": "https://brillibrilli.com/score",
                    "deployment": "dep1",
                    "endpoint_exists": True
                }
            ]
        }
    ]
}

@app.route('/models', methods=['GET'])
def get_models():
    try:
        account_name = os.getenv('STORAGE_ACCOUNT_NAME')
        container_name = os.getenv('CONTAINER_NAME')
        sas_token = os.getenv('SAS_TOKEN')

        if not all([account_name, container_name, sas_token]):
            print("Missing Azure configuration, falling back to mock data")
            return jsonify(MOCK_DATA)

        # Initialize the blob service client using account URL with SAS token
        account_url = f"https://{account_name}.blob.core.windows.net"
        blob_service_client = BlobServiceClient(account_url=account_url, credential=sas_token)
        container_client = blob_service_client.get_container_client(container_name)
        
        # Get the first blob in the container (assuming it's our JSON file)
        blobs = list(container_client.list_blobs())
        if not blobs:
            print("No blobs found in container, falling back to mock data")
            return jsonify(MOCK_DATA)
            
        blob_client = container_client.get_blob_client(blobs[0])
        data = blob_client.download_blob().readall()
        
        return data

    except Exception as e:
        print(f"Error fetching from blob storage: {str(e)}")
        return jsonify(MOCK_DATA)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)