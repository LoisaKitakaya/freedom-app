<script lang="ts">
	import '../app.pcss';

	import NavDrawer from '$lib/components/NavDrawer.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import Transition from '$lib/components/Transition.svelte';

	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	onMount(() => {
		const navLinks = document.querySelectorAll('.nav-link');

		navLinks.forEach(() => {
			if ($page.url.pathname === '/') {
				navLinks[0]?.classList.add('text-orange-500');
			} else if ($page.url.pathname === '/services') {
				navLinks[1]?.classList.add('text-orange-500');
			} else if ($page.url.pathname === '/skills') {
				navLinks[2]?.classList.add('text-orange-500');
			} else if ($page.url.pathname === '/work') {
				navLinks[3]?.classList.add('text-orange-500');
			} else if ($page.url.pathname === '/contact') {
				navLinks[4]?.classList.add('text-orange-500');
			}
		});
	});
</script>

<div class="relative z-0 flex h-full w-full overflow-hidden">
	<NavDrawer />

	<div class="relative flex h-full max-w-full flex-1 flex-col overflow-hidden">
		<NavBar />

		<main>
			<Transition url={data.url}>
				<slot />
			</Transition>
		</main>
	</div>
</div>

<style>
	/* Extra small devices (phones, 600px and down) */
	@media only screen and (max-width: 600px) {
	}

	/* Small devices (portrait tablets and large phones, 600px and up) */
	@media only screen and (min-width: 600px) {
	}
</style>
