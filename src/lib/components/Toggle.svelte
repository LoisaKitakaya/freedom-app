<script lang="ts">
	import { fly } from 'svelte/transition'
	import { Moon, Sun } from 'lucide-svelte'
	import { theme, toggleTheme } from '$lib/theme'
</script>

{#if $theme === 'dracula'}
	<button on:click={toggleTheme} aria-label="Toggle theme" in:fly={{ y: 10 }}>
		<Moon />
	</button>
{:else}
	<button on:click={toggleTheme} aria-label="Toggle theme" in:fly={{ y: -10 }}>
		<Sun />
	</button>
{/if}
