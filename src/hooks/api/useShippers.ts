import { useQuery } from "@tanstack/react-query";
import { getShippers } from "@/api/shippers";

export const useShippers = () => {
  return useQuery({
    queryKey: ["shippers"],
    queryFn: getShippers,
    staleTime: 1000 * 60 * 5,
  });
};
