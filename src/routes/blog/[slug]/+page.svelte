<script lang="ts">
	import moment from 'moment'
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
	<div class="flex justify-between">
		<div />
		<div>
			<p class="mb-4">{moment(meta.date).format('Do MMM YYYY')}</p>
			<div>
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
