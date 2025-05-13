import { z } from "zod";

export const customerSchema = z.object({
  CustomerID: z.string().length(5), // NW uses 5-char codes like "ALFKI"
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
});

export type Customer = z.infer<typeof customerSchema>;
