import { defineCollection } from "astro:content";
import { articleSchema } from "./schemas/article";

const articleCollection = defineCollection({ schema: articleSchema });

export const collections = { article: articleCollection };
