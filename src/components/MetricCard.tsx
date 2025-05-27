import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number; // Doesn't allow undefined
  icon: LucideIcon; // Proper type for Lucide icons
  loading?: boolean;
}

export function MetricCard({
  title,
  value,
  icon: Icon,
  loading = false,
}: MetricCardProps) {
  if (loading) {
    return (
      <div className="rounded-lg border bg-card p-6 shadow-sm animate-pulse">
        <div className="h-6 w-1/2 bg-gray-200 rounded mb-4"></div>
        <div className="h-8 w-3/4 bg-gray-200 rounded"></div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </div>
      <div className="mt-2">
        <span className="text-2xl font-bold">{value}</span>
      </div>
    </div>
  );
}
