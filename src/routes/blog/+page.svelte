<script lang="ts">
	import * as config from '$lib/config'
	export let data

	const { posts } = data
</script>

<svelte:head>
	<title>{config.title} | Blog</title>
</svelte:head>

<section>
	<h1 class="text-4xl mb-10">Read something</h1>

	<div class="grid grid-cols-3 gap-4">
		{#each posts as post}
			<a href="/blog/{post.slug}">
				<div class="card bg-base-200 text-base-content shadow h-full w-full mb-4 hover:border-primary-focus hover:border border border-transparent transition-all">
					<div class="card-body">
						<h2 class="card-title text-2xl">{post.title}</h2>
						<p>{post.description}</p>
						<p class="font-semibold">
							Categories:

							{#each post.categories as category}
								<span>| {category} </span>
							{/each}
						</p>
						<p class="italic text-sm">Published: {post.date}</p>
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>
