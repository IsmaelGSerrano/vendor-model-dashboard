import { ModelsData } from "@/types/models";

const mockData: ModelsData = {
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
        },
        {
          model_name: "Brave Model",
          model_type: "brave",
          status: 2,
          last_data: "2024-03-28",
          ready_date: "2025-01-08 09:01:03",
          model_last_date_trained: "2024-03-28",
          training_date: "2025-01-08 09:59:29"
        }
      ],
      model_version: 30,
      model_name: "mdl_alice",
      endpoint: "https://brillibrilli.com/score",
      deployment: "dep1",
      endpoint_exists: true
    },
    {
      vendor: "xxx2",
      vendor_name: "Spotify",
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
        },
        {
          model_name: "Brave Model",
          model_type: "brave",
          status: 2,
          last_data: "2024-03-28",
          ready_date: "2025-01-08 09:01:03",
          model_last_date_trained: "2024-03-28",
          training_date: "2025-01-08 09:59:29"
        }
      ],
      model_version: 30,
      model_name: "mdl_alice",
      endpoint: "https://brillibrilli.com/score",
      deployment: "dep1",
      endpoint_exists: true
    }
  ]
};

export const fetchModelsData = async (): Promise<ModelsData> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return mockData;
};