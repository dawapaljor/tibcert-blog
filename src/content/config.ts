import { defineCollection, z } from 'astro:content'
import { CATEGORIES } from '@/data/categories'

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
			updatedDate: z
				.string()
				.optional()
				.transform((str) => (str ? new Date(str) : undefined)),
			heroImage: image().optional(),
			category: z.enum(CATEGORIES),
			tags: z.array(z.string()),
			draft: z.boolean().default(false)
		})
})
export const collections = { blog }


