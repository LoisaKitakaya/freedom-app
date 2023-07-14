<script lang="ts">
	import * as config from '$lib/config'
	export let data

	const { content } = data
	const { meta } = data
	const { slug } = data
</script>

<svelte:head>
	<title>{config.title} | {slug}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={meta.title} />
</svelte:head>

<article>
	<!-- Title -->

	<!-- <p>Published at {formatDate(data.meta.date)}</p> -->

	<!-- Tags -->

	<div class="flex justify-between">
		<div />
		<div>
			<div class="mb-6">
				{#each meta.categories as category}
					<a href="/blog/categories/{category}" class="mr-2 link link-hover">&num;{category}</a>
				{/each}
			</div>
			<div class="prose lg:prose-lg">
				<svelte:component this={content} />
			</div>
		</div>
		<div />
	</div>
</article>
