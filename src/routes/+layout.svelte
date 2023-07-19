<script lang="ts">
	import '../app.css'

	import Footer from '$lib/components/Footer.svelte'
	import Header from '$lib/components/Header.svelte'
</script>

<Header />

<main class="px-6 py-2">
	<slot />
</main>

<Footer />

<style>
	main {
		min-height: 73vh !important;
	}
</style>
