import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const recepty = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recepty' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    kategorie: z.enum(['hlavni', 'polevky', 'sladke']),
    cas: z.number(),
    porce: z.number(),
    ingredience: z.array(z.string()),
    foto: image().optional(),
    fotoDetail: image().optional(),
  }),
});

export const collections = { recepty };