// SDK利用準備
import type { z } from "astro/zod";
import { createClient, MicroCMSQueries } from "microcms-js-sdk";
import type { memoSchema, wordSchema } from "src/content/schemas/blog";
const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// Memo：型定義
export type Memo = z.infer<typeof memoSchema>;
export type MemoResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Memo[];
};

// Memo：APIの呼び出し
export const getMemos = async (queries?: MicroCMSQueries) => {
  return await client.get<MemoResponse>({ endpoint: "memorandum", queries });
};
export const getMemoDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Memo>({
    endpoint: "memorandum",
    contentId,
    queries,
  });
};

// Word：型定義
export type Word = z.infer<typeof wordSchema>;
export type WordResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Word[];
};

// Word：APIの呼び出し
export const getWords = async (queries?: MicroCMSQueries) => {
  return await client.get<WordResponse>({ endpoint: "word", queries });
};
