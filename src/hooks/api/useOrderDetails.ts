import { useQuery } from "@tanstack/react-query";
import { getOrderDetails } from "@/api/orderDetails";

export const useOrderDetails = () => {
  return useQuery({
    queryKey: ["orderDetails"],
    queryFn: () => getOrderDetails(),
    staleTime: 1000 * 60 * 5,
  });
};
