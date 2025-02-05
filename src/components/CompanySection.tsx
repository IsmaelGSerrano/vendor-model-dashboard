import { CompanyData } from "@/types/models";
import { useState } from "react";
import VendorSection from "./VendorSection";
import { Building2, ChevronDown, ChevronUp } from "lucide-react";

interface CompanySectionProps {
  company: CompanyData;
}

const CompanySection = ({ company }: CompanySectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border rounded-lg mb-6 bg-gray-50">
      <button
        className="w-full flex items-center justify-between p-4 hover:bg-opacity-75 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          <Building2 className="h-6 w-6 text-gray-600" />
          <h2 className="text-2xl font-bold text-gray-800">{company.company_name}</h2>
          <span className="text-sm text-gray-600">
            ({company.vendors_list.length} vendors)
          </span>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isExpanded && (
        <div className="p-4 border-t space-y-4">
          {company.vendors_list.map((vendor) => (
            <VendorSection key={vendor.vendor} vendor={vendor} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CompanySection;