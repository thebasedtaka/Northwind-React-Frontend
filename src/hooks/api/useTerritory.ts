import { useQuery } from "@tanstack/react-query";
import { getTerritories } from "@/api/territory";

export const useTerritory = () => {
  return useQuery({
    queryKey: ["territories"],
    queryFn: getTerritories,
    staleTime: 1000 * 60 * 5,
  });
};
