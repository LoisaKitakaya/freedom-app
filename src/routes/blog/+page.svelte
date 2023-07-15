<script lang="ts">
	import * as config from '$lib/config'
	import moment from 'moment'
	export let data

	const { posts } = data

	const categories = [
		'programming',
		'python',
		'javascript',
		'django',
		'flask',
		'svelte',
		'misc',
		'life',
		'philosophy'
	]
</script>

<svelte:head>
	<title>{config.title} | Blog</title>
</svelte:head>

<section>
	<div class="flex justify-between items-center mb-10">
		<h1 class="text-4xl">Read something</h1>
		<div class="dropdown dropdown-bottom dropdown-end">
			<label tabindex="0" class="btn btm-sm btn-ghost">Categories</label>
			<ul
				tabindex="0"
				class="dropdown-content z-[1] menu p-4 shadow-sm bg-base-100 rounded-box w-40 border"
			>
				{#each categories as category}
					<li>
						<a href="{config.url}/blog/categories/{category}">{category}</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<div class="grid grid-cols-3 gap-4">
		{#each posts as post}
			<a href="/blog/{post.slug}">
				<div
					class="card bg-base-200 text-base-content shadow h-full w-full mb-4 hover:border-primary-focus hover:border border border-transparent transition-all"
				>
					<div class="card-body">
						<h2 class="card-title text-2xl">{post.title}</h2>
						<p>{post.description}</p>
						<p class="font-semibold">
							Categories:

							{#each post.categories as category}
								<span>| {category} </span>
							{/each}
						</p>
						<p class="italic text-sm">Published: {moment(post.date).fromNow()}</p>
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>
