<script lang="ts">
	import '../app.css'

	import Footer from '$lib/components/Footer.svelte'
	import Header from '$lib/components/Header.svelte'
</script>

<div class="layout">
	<Header />

	<main class="px-6 py-2">
		<slot />
	</main>

	<Footer />
</div>

<style>
    main {
        min-height: 82vh !important;
    }
</style>
