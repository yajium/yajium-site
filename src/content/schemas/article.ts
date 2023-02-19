import { z } from "astro/zod";

export const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z
    .string()
    .or(z.date())
    .transform((val) => new Date(val)),
  pubFromatedDate: z.string().optional(),
  tags: z.array(z.string()),
});
