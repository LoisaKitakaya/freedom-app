export type Categories =
	| 'programming'
	| 'javascript'
	| 'python'
	| 'django'
	| 'svelte'
	| 'flask'
	| 'misc'

export type Projects =
	| 'automation'
	| 'javascript'
	| 'scrapping'
	| 'fullstack'
	| 'frontend'
	| 'backend'
	| 'website'
	| 'python'
	| 'webapp'
	| 'misc'

export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
}


