import type { Post } from '$lib/types.js'

export const load = async ({ fetch }) => {
	const response = await fetch('api/portfolio')
	const posts: Post[] = await response.json()
	return { posts }
}
