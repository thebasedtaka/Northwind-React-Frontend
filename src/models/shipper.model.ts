import { z } from "zod";

export const shipperSchema = z.object({
  ShipperID: z.number().int().positive(),
  CompanyName: z.string().min(1).max(40),
  Phone: z.string().max(24).nullable(),
});

export type Shipper = z.infer<typeof shipperSchema>;
