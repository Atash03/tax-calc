import { z } from "zod";

export const formSchema = z.object({
  totalTax: z.coerce.number().min(1),
  taxRate: z.coerce.number().min(1),
});
