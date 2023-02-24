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

export const memoSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  title: z.string(),
  content: z.string(),
});

export const wordSchema = z.object({
  words: z.array(z.object({ word: z.string() })),
});
