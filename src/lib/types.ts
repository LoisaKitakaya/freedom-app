export type Categories =
	| 'programming'
	| 'python'
	| 'javascript'
	| 'django'
	| 'flask'
	| 'svelte'
	| 'misc'

export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
}
