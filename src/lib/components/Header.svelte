<script lang="ts">
	import * as config from '$lib/config'
	import { Menu } from 'lucide-svelte'
	import Toggle from './Toggle.svelte'

	// @ts-ignore
	const updateTheme = ({ action }) => {
		const theme = action.searchParams.get('theme')

		if (theme) {
			document.documentElement.setAttribute('data-theme', theme)
		}
	}
</script>

<div id="menu">
	<button id="menu-btn">
		<Menu />
	</button>
</div>

<div id="nav">
	<Toggle />
</div>

<style>
	#menu {
		position: fixed;
		top: 2rem;
		left: 3rem;
	}

	#nav {
		position: fixed;
		top: 2rem;
		right: 3rem;
	}
</style>
