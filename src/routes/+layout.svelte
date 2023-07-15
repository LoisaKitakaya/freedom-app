<script lang="ts">
	import '../app.css'

	import Footer from '$lib/components/Footer.svelte'
	import Header from '$lib/components/Header.svelte'

	export let data

	const { url } = data
</script>

<div class="layout">
	<Header />

	{#key url}
		<main class="px-6 py-2">
			<slot />
		</main>
	{/key}

	<Footer />
</div>

<style>
	main {
		min-height: 73vh !important;
	}
</style>
