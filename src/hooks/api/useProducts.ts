import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/api/products";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 5,
  });
};
