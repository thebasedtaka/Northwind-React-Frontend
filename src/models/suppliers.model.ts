import { z } from "zod";

export const supplierSchema = z.object({
  SupplierID: z.number().int().positive(),
  CompanyName: z.string().min(1).max(40),
  ContactName: z.string().max(30).nullable(),
  ContactTitle: z.string().max(30).nullable(),
  Address: z.string().max(60).nullable(),
  City: z.string().max(15).nullable(),
  Region: z.string().max(15).nullable(),
  PostalCode: z.string().max(10).nullable(),
  Country: z.string().max(15).nullable(),
  Phone: z.string().max(24).nullable(),
  Fax: z.string().max(24).nullable(),
  HomePage: z.string().url().nullable(),
});

export type Supplier = z.infer<typeof supplierSchema>;
