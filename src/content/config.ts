import { defineCollection } from "astro:content";
import { articleSchema } from "./schemas/blog";

const articleCollection = defineCollection({ schema: articleSchema });

export const collections = { article: articleCollection };
