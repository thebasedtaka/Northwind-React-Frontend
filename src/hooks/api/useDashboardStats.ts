import { useQuery } from "@tanstack/react-query";
import { getDashboardStats } from "@/api/dashboard";

export const useDashboardStats = (options = {}) => {
  return useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: () => getDashboardStats(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    ...options,
  });
};
