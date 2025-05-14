import { getCustomers } from "@/api/customers";
import { useQuery } from "@tanstack/react-query";

export const useCustomers = () => {
  return useQuery({
    queryKey: ["customers"],
    queryFn: getCustomers,
    staleTime: 1000 * 60 * 5,
  });
};
