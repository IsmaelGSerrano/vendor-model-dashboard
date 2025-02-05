import { Model } from "@/types/models";
import { format } from "date-fns";
import StatusBadge from "./StatusBadge";

interface ModelCardProps {
  model: Model;
}

const ModelCard = ({ model }: ModelCardProps) => {
  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    return format(new Date(dateString), "MMM dd, yyyy HH:mm");
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold">{model.model_name}</h3>
          <p className="text-sm text-gray-600">{model.model_type}</p>
        </div>
        <StatusBadge status={model.status} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-600">Last Data</p>
          <p className="font-medium">{formatDate(model.last_data)}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Training Date</p>
          <p className="font-medium">{formatDate(model.training_date)}</p>
        </div>
        {model.score !== undefined && (
          <div>
            <p className="text-sm text-gray-600">Score</p>
            <p className="font-medium">{model.score}</p>
          </div>
        )}
        {model.deployment_date && (
          <div>
            <p className="text-sm text-gray-600">Deployment Date</p>
            <p className="font-medium">{formatDate(model.deployment_date)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModelCard;