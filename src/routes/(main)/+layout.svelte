<script lang="ts">
	import '../../app.css'
	import { Menu } from 'lucide-svelte'

	import Header from '$lib/components/layout/Header.svelte'
	import Footer from '$lib/components/layout/Footer.svelte'
</script>

<div class="drawer">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<div id="menu">
			<label for="my-drawer" id="menu-btn" class="drawer-button cursor-pointer">
				<Menu />
			</label>
		</div>

		<!--  -->

		<Header />

		<slot />

		<Footer />

		<!--  -->
	</div>
	<div class="drawer-side z-10">
		<label for="my-drawer" class="drawer-overlay" />
		<ul class="menu p-4 w-60 h-full bg-base-200 text-base-content">
			<p class="pl-4 text-xl font-semibold mb-4">Menu</p>
			<!-- Sidebar content here -->
			<li><a href="/blog">Blog</a></li>
			<li>
				<a
					target="_blank"
					href="https://docs.google.com/document/d/1xdDYapWIythGyEJSzIcF7bEwxwAeV3O9sfvzAo27v6g/edit?usp=sharing"
					>Resume</a
				>
			</li>
			<li><a href="/github">GitHub Activity</a></li>
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
