import { z } from "zod";

export const territorySchema = z.object({
  TerritoryID: z.string().length(20),
  TerritoryDescription: z.string().length(50),
  RegionID: z.number().int().positive(),
});

export type Territory = z.infer<typeof territorySchema>;
