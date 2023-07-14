export type Categories =
	| 'programming'
	| 'python'
	| 'javascript'
	| 'django'
	| 'flask'
	| 'svelte'
	| 'misc'
	| 'life'
	| 'philosophy'

export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
}
