<script lang="ts">
	import '../../app.css'
	import { onMount } from 'svelte'

	import { Menu, Scroll, Gem, Github } from 'lucide-svelte'

	import Header from '$lib/components/layout/Header.svelte'
	import Footer from '$lib/components/layout/Footer.svelte'

	import { fade } from 'svelte/transition'

	export let data

	let isNavLinksVisible = false

	onMount(() => {
		// This will run after the component is mounted
		isNavLinksVisible = false // Initially hide nav links
	})

	function toggleNavLinks() {
		isNavLinksVisible = !isNavLinksVisible
	}
</script>

<div class="drawer">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<div id="menu" class="z-20">
			<label for="my-drawer" id="menu-btn" class="drawer-button cursor-pointer">
				<Menu />
			</label>
		</div>

		<!--  -->

		<Header />

		{#key data.url}
			<div out:fade={{ duration: 400 }} in:fade={{ delay: 400, duration: 400 }}>
				<slot />
			</div>
		{/key}

		<Footer />

		<!--  -->
	</div>
	<div class="drawer-side z-30">
		<label for="my-drawer" class="drawer-overlay" />
		<ul class="menu p-4 w-60 h-full bg-base-200 text-base-content">
			<p class="pl-4 text-xl font-semibold mb-4">Menu</p>
			<!-- Sidebar content here -->
			<li>
				<a
					target="_blank"
					href="https://docs.google.com/document/d/1xdDYapWIythGyEJSzIcF7bEwxwAeV3O9sfvzAo27v6g/edit?usp=sharing"
					><Scroll /> Resume</a
				>
			</li>
			<li><a href="/github"><Github /> GitHub Activity</a></li>
			<li><a href="/shop"><Gem /> Shop / Pre-built</a></li>
			<li>
				<ul>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
					<li on:click={toggleNavLinks}>
						<p class="pl-4 font-semibold">Navigation</p>
					</li>
					<div class:hidden={!isNavLinksVisible}>
						<li>
							<a href="/">▶️ Home</a>
						</li>
						<li>
							<a href="/about">▶️ About</a>
						</li>
						<li>
							<a href="/portfolio">▶️ Portfolio</a>
						</li>
						<li>
							<a href="/reviews">▶️ Reviews</a>
						</li>
						<li>
							<a href="/contact">▶️ Contact</a>
						</li>
					</div>
				</ul>
			</li>
		</ul>
	</div>
</div>

<style>
	#menu {
		position: fixed;
		top: 2rem;
		left: 3rem;
	}

	@media only screen and (max-width: 600px) {
		#menu {
			top: 1rem !important;
			left: 1rem !important;
		}
	}
</style>
