import { z } from "zod";

export const compareSchema = z.object({
  termA: z.string().min(1, "First search term is required"),
  termB: z.string().min(1, "Second search term is required"),
});

export type CompareFormData = z.infer<typeof compareSchema>;
