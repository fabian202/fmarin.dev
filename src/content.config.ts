import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    company: z.string(),
    position: z.string(),
    startDate: z.string(),
    endDate: z.string().nullable(),
    description: z.string().optional(),
    order: z.number(),
  }),
});

const skills = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/skills" }),
  schema: z.object({
    category: z.string(),
    title: z.string(),
    tags: z.array(z.string()),
    order: z.number(),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/education" }),
  schema: z.object({
    school: z.string(),
    degree: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    order: z.number(),
  }),
});

const highlights = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/highlights" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  experience,
  skills,
  education,
  highlights,
};
