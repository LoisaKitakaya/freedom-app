<script>
	import '../app.pcss';

	import NavDrawer from '$lib/components/NavDrawer.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		const navLinks = document.querySelectorAll('.nav-link');

		navLinks.forEach(() => {
			if ($page.url.pathname === '/') {
				navLinks[0]?.classList.add('text-rose-500');
			} else if ($page.url.pathname === '/services') {
				navLinks[1]?.classList.add('text-rose-500');
			} else if ($page.url.pathname === '/skills') {
				navLinks[2]?.classList.add('text-rose-500');
			} else if ($page.url.pathname === '/work') {
				navLinks[3]?.classList.add('text-rose-500');
			} else if ($page.url.pathname === '/contact') {
				navLinks[4]?.classList.add('text-rose-500');
			}
		});
	});
</script>

<NavDrawer />

<main class="absolute right-0" id="main-body">
	<slot />
</main>

<style>
	#main-body {
		width: 80.675%;
	}
</style>
