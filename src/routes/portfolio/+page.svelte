<script lang="ts">
	import * as config from '$lib/config'
	import moment from 'moment'
	import { fade } from 'svelte/transition'

	export let data

	const { posts } = data
</script>

<svelte:head>
	<title>{config.title} | Portfolio</title>
</svelte:head>

<section out:fade={{ duration: 400 }} in:fade={{ delay: 400, duration: 400 }}>
	<h1 class="text-4xl mb-10">My Work</h1>

	{#if posts.length > 0}
		<div class="grid grid-cols-3 gap-4">
			{#each posts as post}
				<a href="/portfolio/{post.slug}">
					<div
						class="card bg-base-200 text-base-content shadow h-full w-full mb-4 hover:border-primary-focus hover:border border border-transparent transition-all"
					>
						<div class="card-body">
							<h2 class="card-title text-2xl">{post.title}</h2>
							<p>{post.description}</p>
							<p class="font-semibold">
								Project type:

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
	{:else}
		<div>
			<h1 class="text-xl font-semibold text-center">No previous work has been posted yet</h1>
		</div>
	{/if}
</section>
