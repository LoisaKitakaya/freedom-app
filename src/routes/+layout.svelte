<script lang="ts">
	import '../app.css'

	import { fade } from 'svelte/transition'
	import Footer from '$lib/components/Footer.svelte'
	import Header from '$lib/components/Header.svelte'

	export let data

	const { url } = data
</script>

<div class="layout">
	<Header />

	{#key url}
		<main class="px-6 py-2" transition:fade>
			<slot />
		</main>
	{/key}

	<Footer />
</div>

<style>
	main {
		min-height: 82vh !important;
	}
</style>
