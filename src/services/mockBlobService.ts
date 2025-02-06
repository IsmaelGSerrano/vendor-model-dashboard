import { ModelsData } from "@/types/models";

const fetchBlobData = async (): Promise<ModelsData> => {
  try {
    const response = await fetch('/api/models');
    if (!response.ok) {
      throw new Error('Failed to fetch from backend');
    }
    return await response.json();
  } catch (error) {
    console.warn('Failed to fetch from backend:', error);
    throw error;
  }
};

export const fetchModelsData = async (): Promise<ModelsData> => {
  try {
    return await fetchBlobData();
  } catch (error) {
    console.warn('Error fetching data, using mock data:', error);
    // Mock data as fallback
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
    return {
      companies: [
        {
          company_name: "Tech Corp",
          vendors_list: [
            {
              vendor: "xxx1",
              vendor_name: "Lovable",
              size: 6,
              avg_lines: 1.0,
              category: "one-template",
              models: [
                {
                  model_name: "Dune Model",
                  model_type: "dune",
                  status: 1,
                  last_data: "2024-03-28",
                  ready_date: "2025-01-08 09:01:03",
                  model_last_date_trained: "2024-03-28",
                  training_date: "2025-01-08 11:09:35",
                  score: 1,
                  published_date: "2025-01-08 11:28:02",
                  model_last_date_published: "2024-03-28",
                  registered_date: "2025-01-09 13:56:25",
                  model_last_date_registered: "2024-03-28",
                  deployment_date: "2025-01-13 12:30:01",
                  model_last_date_deployed: "2024-03-28"
                }
              ],
              model_version: 30,
              model_name: "mdl_alice",
              endpoint: "https://brillibrilli.com/score",
              deployment: "dep1",
              endpoint_exists: true
            }
          ]
        }
      ]
    };
  }
}