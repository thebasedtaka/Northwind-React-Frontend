import { z } from "zod";

export const employeeTerritorySchema = z.object({
  EmployeeID: z.number().int().positive(),
  TerritoryID: z.string().length(20),
});

export type EmployeeTerritory = z.infer<typeof employeeTerritorySchema>;
