<script lang="ts">
	import * as config from '$lib/config'
	import Toggle from './Toggle.svelte'

	// @ts-ignore
	const updateTheme = ({ action }) => {
		const theme = action.searchParams.get('theme')

		if (theme) {
			document.documentElement.setAttribute('data-theme', theme)
		}
	}
</script>

<div class="navbar bg-base-100 mb-4">
	<div class="flex-1">
		<a href="/" class="px-4 normal-case text-2xl font-semibold">{config.title}</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1 text-lg">
			<li>
				<a href="/about">About</a>
			</li>
			<li>
				<a href="/blog">Blog</a>
			</li>
			<li>
				<a href="/portfolio">Portfolio</a>
			</li>
			<li>
				<Toggle />
			</li>
		</ul>
	</div>
</div>
