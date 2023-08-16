<script lang="ts">
	import { enhance } from '$app/forms'
	import type { SubmitFunction } from '../../../routes/(main)/$types'
	import { fly } from 'svelte/transition'

	import { Menu, Moon, Sun } from 'lucide-svelte'

	let mode: string

	const updateTheme: SubmitFunction = ({ action }) => {
		const theme = action.searchParams.get('theme')

		if (theme) {
			document.documentElement.setAttribute('data-theme', theme)
			mode = theme
		}
	}
</script>

<div id="nav">
	<form method="POST" use:enhance={updateTheme}>
		{#if mode !== 'dracula'}
			<button formaction="/?/setTheme&theme=dracula" aria-label="Toggle dark" in:fly={{ y: -10 }}>
				<Moon />
			</button>
		{:else}
			<button formaction="/?/setTheme&theme=fantasy" aria-label="Toggle Light" in:fly={{ y: 10 }}>
				<Sun />
			</button>
		{/if}
	</form>
</div>

<!-- <div class="drawer">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<div id="menu">
			<label for="my-drawer" id="menu-btn" class="drawer-button cursor-pointer">
				<Menu />
			</label>
		</div>
	</div>
	<div class="drawer-side z-10">
		<label for="my-drawer" class="drawer-overlay" />
		<ul class="menu p-4 w-60 h-full bg-base-200 text-base-content">
			<p class="pl-4 text-xl font-semibold mb-4">Menu</p>
			<li><a href="/blog">Blog</a></li>
			<li><a href="/">Resume</a></li>
			<li><a href="/github">GitHub Activity</a></li>
		</ul>
	</div>
</div> -->

<style>

	#nav {
		position: fixed;
		top: 2rem;
		right: 3rem;
	}

	@media only screen and (max-width: 600px) {

		#nav {
			top: 1rem !important;
			right: 1rem !important;
		}
	}
</style>
