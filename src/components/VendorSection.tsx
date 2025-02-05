import { Vendor } from "@/types/models";
import { useState } from "react";
import ModelCard from "./ModelCard";
import { ChevronDown, ChevronUp } from "lucide-react";

interface VendorSectionProps {
  vendor: Vendor;
}

const VendorSection = ({ vendor }: VendorSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border rounded-lg mb-6">
      <button
        className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div>
          <h2 className="text-xl font-semibold">{vendor.vendor_name}</h2>
          <p className="text-sm text-gray-600">
            {vendor.models.length} models • Version {vendor.model_version}
          </p>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
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