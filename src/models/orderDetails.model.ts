import { z } from "zod";

export const orderDetailSchema = z.object({
  OrderID: z.number().int().positive(),
  ProductID: z.number().int().positive(),
  UnitPrice: z.string().transform(parseFloat).pipe(z.number().positive()),
  Quantity: z.number().int().min(1),
  Discount: z.number().min(0).max(1), // 0-1 represents 0-100%
});

export type OrderDetail = z.infer<typeof orderDetailSchema>;
