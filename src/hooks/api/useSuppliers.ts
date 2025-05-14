import { useQuery } from "@tanstack/react-query";
import { getSupplier } from "@/api/supplier";

export const useSuppliers = () => {
  return useQuery({
    queryKey: ["suppliers"],
    queryFn: getSupplier,
    staleTime: 1000 * 60 * 5,
  });
};
