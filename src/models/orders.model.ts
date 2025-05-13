import { z } from "zod";

export const orderSchema = z.object({
  OrderID: z.number().int().positive(),
  CustomerID: z.string().length(5).nullable(),
  EmployeeID: z.number().int().nullable(),
  OrderDate: z.string().datetime().nullable(), // or z.date() if parsing
  RequiredDate: z.string().datetime().nullable(),
  ShippedDate: z.string().datetime().nullable(),
  ShipVia: z.number().int().nullable(),
  Freight: z
    .string()
    .transform((v) => parseFloat(v))
    .pipe(z.number().gte(0))
    .nullable(),
  ShipName: z.string().max(40).nullable(),
  ShipAddress: z.string().max(60).nullable(),
  ShipCity: z.string().max(15).nullable(),
  ShipRegion: z.string().max(15).nullable(),
  ShipPostalCode: z.string().max(10).nullable(),
  ShipCountry: z.string().max(15).nullable(),
});

export type Order = z.infer<typeof orderSchema>;
