<script lang="ts">
	import '../app.css'

	import { fade } from 'svelte/transition'
	import BackToTop from '$lib/components/BackToTop.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import Header from '$lib/components/Header.svelte'

	export let data

	const { url } = data

	console.log(url)
</script>

<div class="layout">
	<Header />

	{#key url}
		<main class="px-6 py-2" transition:fade>
			<slot />
			<BackToTop />
		</main>
	{/key}

	<Footer />
</div>

<style>
	main {
		min-height: 73vh !important;
	}
</style>