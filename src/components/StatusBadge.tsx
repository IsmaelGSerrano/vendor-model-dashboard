import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: number;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const getStatusInfo = (status: number) => {
    switch (status) {
      case 1:
        return { label: "Active", className: "bg-success" };
      case 2:
        return { label: "In Progress", className: "bg-warning" };
      default:
        return { label: "Unknown", className: "bg-secondary" };
    }
  };

  const { label, className } = getStatusInfo(status);

  return (
    <span
      className={cn(
        "px-2 py-1 rounded-full text-xs font-medium text-white",
        className
      )}
    >
      {label}
    </span>
  );
};

export default StatusBadge;