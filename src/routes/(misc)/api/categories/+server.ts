import type { Post } from '$lib/types'
import { json } from '@sveltejs/kit'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getPosts = (param: any) => {
	let posts: Post[] = []

	const paths = import.meta.glob('/src/posts/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]

		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>
			const post = { ...metadata, slug } satisfies Post
			post.categories.includes(param) && posts.push(post)
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	)

	return posts
}

export const GET = async ({ url }) => {
	const param = url.searchParams.get('category')

	const posts = getPosts(param)

	return json(posts)
}
