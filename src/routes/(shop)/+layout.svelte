<script>
	import Footer2 from '$lib/components/layout/Footer2.svelte'
	import Header2 from '$lib/components/layout/Header2.svelte'
</script>

<Header2 />

<main>
	<slot />
</main>

<Footer2 />

<style>
	main {
		min-height: 100vh;
	}
</style>
