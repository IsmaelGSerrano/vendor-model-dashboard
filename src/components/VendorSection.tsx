import { Vendor } from "@/types/models";
import { useState } from "react";
import ModelCard from "./ModelCard";
import { ChevronDown, ChevronUp, Database, LineChart, Tag } from "lucide-react";

interface VendorSectionProps {
  vendor: Vendor;
}

const VendorSection = ({ vendor }: VendorSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "one-template":
        return "bg-purple-50 border-purple-200";
      case "multi-template":
        return "bg-blue-50 border-blue-200";
      case "custom":
        return "bg-orange-50 border-orange-200";
      default:
        return "bg-gray-50 border-gray-200";
    }
  };

  const getCategoryTextColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "one-template":
        return "text-purple-600 bg-purple-100";
      case "multi-template":
        return "text-blue-600 bg-blue-100";
      case "custom":
        return "text-orange-600 bg-orange-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className={`border rounded-lg mb-6 ${getCategoryColor(vendor.category)}`}>
      <button
        className="w-full flex items-center justify-between p-4 hover:bg-opacity-75 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-semibold">{vendor.vendor_name}</h2>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryTextColor(
                vendor.category
              )}`}
            >
              {vendor.category}
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Database className="h-4 w-4" />
              <span>{vendor.models.length} models</span>
            </div>
            <div className="flex items-center gap-1">
              <Tag className="h-4 w-4" />
              <span>Version {vendor.model_version}</span>
            </div>
            <div className="flex items-center gap-1">
              <LineChart className="h-4 w-4" />
              <span>Size: {vendor.size}</span>
            </div>
            <div className="flex items-center gap-1">
              <LineChart className="h-4 w-4" />
              <span>Avg. Lines: {vendor.avg_lines}</span>
            </div>
          </div>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-gray-500 ml-4" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500 ml-4" />
        )}
      </button>
      {isExpanded && (
        <div className="p-4 border-t">
          <div className="grid grid-cols-1 gap-4">
            {vendor.models.map((model) => (
              <ModelCard key={model.model_name} model={model} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorSection;