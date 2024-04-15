import { defineCollection, z } from 'astro:content'
import { CATEGORIES } from '@/data/categories'


const boBlog = defineCollection({
	// Type-check frontmatter using a schema
// Assuming you have an array of objects called 'data'
// Assuming you have an array of objects called 'data'
	schema: ({ image }) =>
		z.object({
			title: z.string().max(180),
			description: z.string().optional(),
			// Transform string to Date object
			pubDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			heroImage: z.string().optional(),
			category: z.enum(CATEGORIES),
			translation: z.string().optional(),
			tags: z.array(z.string()),
			draft: z.boolean().default(false)
		})
})

// Define a collection for a blog with schema validation using Zod library for frontmatter type-checking and transformation.
const blog = defineCollection({
	// Type-check frontmatter using a schema
// Assuming you have an array of objects called 'data'
// Assuming you have an array of objects called 'data'
	schema: ({ image }) =>
		z.object({
			title: z.string().max(180),
			description: z.string(),
			// Transform string to Date object
			pubDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			heroImage: z.string().optional(),
			translation: z.string().optional(),
			category: z.enum(CATEGORIES),
			tags: z.array(z.string()).optional(),
			draft: z.boolean().default(false)
		})
})

export const collections = { boBlog, blog }