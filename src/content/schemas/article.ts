import { z } from "astro/zod";

export const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  // Transform string to Date object
  pubDate: z
    .string()
    .or(z.date())
    .transform((val) => new Date(val)),
  pubFromatedDate: z.string().optional(),
  // updatedDate: z
  //   .string()
  //   .optional()
  //   .transform((str) => (str ? new Date(str) : undefined)),
  tags: z.array(z.string()),
});
