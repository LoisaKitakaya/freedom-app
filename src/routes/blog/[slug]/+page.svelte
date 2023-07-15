<script lang="ts">
	import moment from 'moment'
	import * as config from '$lib/config'
	import { ArrowRight } from 'lucide-svelte'
	import { fade } from 'svelte/transition'

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

<article class="mb-10" out:fade={{ duration: 400 }} in:fade={{ delay: 400, duration: 400 }}>
	<div class="flex justify-between mx-auto w-fit">
		<div>
			<div class="flex justify-between items-center">
				<p>{moment(meta.date).format('Do MMM YYYY')}</p>
				<div>
					{#each meta.categories as category}
						<a href="/blog/categories/{category}" class="mr-2 link link-hover">&num;{category}</a>
					{/each}
				</div>
			</div>
			<div class="prose lg:prose-lg">
				<svelte:component this={content} />
			</div>
		</div>
	</div>
</article>

<section class="flex justify-center w-full sm:w-3/5 mx-auto bg-base-200 card">
	<div class="border p-4 card">
		<p class="text-3xl font-semibold mb-4">Found a mistake?</p>
		<p class="mb-4 text-lg">
			Every post is a Markdown file so contributing is simple as following the link below and
			pressing the pencil icon inside GitHub to edit it.
		</p>
		<a
			href="{config.github}/src/posts/{slug}.md"
			class="link link-hover font-semibold flex justify-start gap-2 items-center"
			><span>Edit on GitHub</span> <ArrowRight size="18" /></a
		>
	</div>
</section>
