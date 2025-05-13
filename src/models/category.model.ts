import { z } from "zod";

export const categorySchema = z.object({
  CategoryID: z.number().int().positive(),
  CategoryName: z.string().min(1).max(15),
  Description: z.string().max(100).nullable(),
  Picture: z
    .union([z.string(), z.null()])
    .optional()
    .transform((val) => {
      return val ? `data:image/jpeg;base64,${val}` : null;
    }),
});

export type Category = z.infer<typeof categorySchema>;
