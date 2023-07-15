import type { Post } from '$lib/types.js'

export const load = async ({ fetch, params }) => {
	const response = await fetch(`/api/categories?category=${params.category}`)
	const posts: Post[] = await response.json()
	console.log(posts)
	return { posts, category: params.category }
}
