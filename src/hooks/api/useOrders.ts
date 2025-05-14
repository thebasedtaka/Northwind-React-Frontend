import { useQuery } from "@tanstack/react-query";
import { getOrders } from "@/api/orders";

export const useOrders = () => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
    staleTime: 1000 * 60 * 5,
  });
};
