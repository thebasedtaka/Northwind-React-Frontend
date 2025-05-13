import { z } from "zod";

export const employeeSchema = z.object({
  EmployeeID: z.number().int().positive(),
  LastName: z.string().min(1).max(20),
  FirstName: z.string().min(1).max(10),
  Title: z.string().max(30).nullable(),
  BirthDate: z.string().datetime().nullable(),
  HireDate: z.string().datetime().nullable(),
  ReportsTo: z.number().int().nullable(), // Self-reference
  PhotoPath: z.string().nullable(),
});

export type Employee = z.infer<typeof employeeSchema>;
