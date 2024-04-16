import { getCollection } from 'astro:content'

export const getBoPosts = async (max?: number) => {
	return (await getCollection('boBlog'))
		.filter((post) => !post.data.draft)
		.sort((a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf())
		.slice(0, max)
}
export const getBoCategories = async () => {
	const posts = await getCollection('boBlog')
	const categories = new Set(posts.map((post) => post.data.category))
	return Array.from(categories)
}