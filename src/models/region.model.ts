import { z } from "zod";

export const regionSchema = z.object({
  RegionID: z.number().int().positive(),
  RegionDescription: z.string().length(50),
});

export type Region = z.infer<typeof regionSchema>;
