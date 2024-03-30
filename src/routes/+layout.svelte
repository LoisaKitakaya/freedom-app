<script>
	import '../app.pcss';

	import NavDrawer from '$lib/components/NavDrawer.svelte';
</script>

<NavDrawer />

<main class="absolute right-0 p-4" id="main-body">
	<slot />
</main>

<style>
	#main-body {
		width: 80%;
	}
</style>
