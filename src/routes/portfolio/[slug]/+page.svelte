<script lang="ts">
	import moment from 'moment'
	import * as config from '$lib/config'
	import { Github, Twitter, Mail } from 'lucide-svelte'
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
						<span class="mr-2">&num;{category}</span>
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
		<p class="text-3xl font-semibold mb-4">Looking for a web developer?</p>
		<p class="mb-4 text-lg">
			Are you ready to take your online presence to the next level and turn your innovative ideas
			into reality? Let's connect and collaborate to create something truly remarkable. Below are my
			socials.
		</p>
		<div class="flex justify-start items-center gap-4">
			<a href="mailto:kitakayaloisa@gmail.com" class="flex justify-start items-center gap-2"
				><span>Email </span><Mail /></a
			>
			|
			<a href="https://twitter.com/FreedomLoisa" class="flex justify-start items-center gap-2"
				><span>Twitter </span><Twitter /></a
			>
			|
			<a href="https://github.com/LoisaKitakaya" class="flex justify-start items-center gap-2"
				><span>Github </span><Github /></a
			>
		</div>
	</div>
</section>
