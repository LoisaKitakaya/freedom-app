<script lang="ts">
	import { fly } from 'svelte/transition'
	import { Moon, Sun } from 'lucide-svelte'
	import { enhance } from '$app/forms'
	import type { SubmitFunction } from '@sveltejs/kit';


	let mode: string

	const updateTheme: SubmitFunction = ({ action }) => {
		const theme = action.searchParams.get('theme')

		if (theme) {
			document.documentElement.setAttribute('data-theme', theme)
			mode = theme
		}
	}
</script>

<div id="nav" class="z-20">
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
