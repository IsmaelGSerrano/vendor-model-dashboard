export interface Model {
  model_name: string;
  model_type: string;
  status: number;
  last_data: string;
  ready_date?: string;
  model_last_date_trained?: string;
  training_date?: string;
  score?: number;
  published_date?: string;
  model_last_date_published?: string;
  registered_date?: string;
  model_last_date_registered?: string;
  deployment_date?: string;
  model_last_date_deployed?: string;
}

export interface Vendor {
  vendor: string;
  vendor_name: string;
  size: number;
  avg_lines: number;
  category: string;
  models: Model[];
  model_version: number;
  model_name: string;
  endpoint: string;
  deployment: string;
  endpoint_exists: boolean;
}

export interface CompanyData {
  company_name: string;
  vendors_list: Vendor[];
}

export interface ModelsData {
  companies: CompanyData[];
}