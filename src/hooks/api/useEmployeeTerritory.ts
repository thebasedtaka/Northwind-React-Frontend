import { useQuery } from "@tanstack/react-query";
import { getEmployeeTeritories } from "@/api/employeeTerritory";

export const useEmployeeTerritory = () => {
  return useQuery({
    queryKey: ["employeeTerritory"],
    queryFn: getEmployeeTeritories,
    staleTime: 1000 * 60 * 5,
  });
};
