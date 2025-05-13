import { z } from "zod";

export const productSchema = z.object({
  ProductID: z.number().int().positive(),
  ProductName: z.string().min(1).max(40),
  SupplierID: z.number().int().positive().nullable(),
  CategoryID: z.number().int().positive().nullable(),
  QuantityPerUnit: z.string().max(20).nullable(),
  UnitPrice: z
    .string()
    .transform((val) => (val ? parseFloat(val) : null))
    .pipe(z.number().nullable()),
  UnitsInStock: z
    .string()
    .transform((val) => (val ? parseFloat(val) : null))
    .pipe(z.number().nullable()),
  UnitsOnOrder: z.number().int().gte(0).nullable(),
  ReorderLevel: z.number().int().gte(0).nullable(),
  Discontinued: z.boolean(),
});

export type Product = z.infer<typeof productSchema>;
