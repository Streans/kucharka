import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const recepty = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recepty' }),
  schema: z.object({
    title: z.string(),
    kategorie: z.enum(['snidane', 'hlavni', 'sladke']),
    cas: z.number(),
    porce: z.number(),
    ingredience: z.array(z.string()),
  }),
});

export const collections = { recepty };