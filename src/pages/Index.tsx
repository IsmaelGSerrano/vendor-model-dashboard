import { ModelsData } from "@/types/models";
import VendorSection from "@/components/VendorSection";
import { useQuery } from "@tanstack/react-query";
import { fetchModelsData } from "@/services/mockBlobService";

const Index = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["models"],
    queryFn: fetchModelsData,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-error">Failed to load models data</div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Models Dashboard</h1>
      <div className="space-y-6">
        {data?.vendors_list.map((vendor) => (
          <VendorSection key={vendor.vendor} vendor={vendor} />
        ))}
      </div>
    </div>
  );
};

export default Index;