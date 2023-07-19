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

<div class="navbar bg-base-100 mb-4">
	<div class="flex-none sm:flex-1">
		<a href="/" class="px-4 normal-case text-2xl font-semibold">{config.title}</a>
	</div>
	<div class="navbar-end sm:hidden">
		<div class="dropdown">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost btn-circle">
				<Menu />
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li>
					<a href="/about">About</a>
				</li>
				<li>
					<a href="/blog">Blog</a>
				</li>
				<li>
					<a href="/portfolio">Portfolio</a>
				</li>
			</ul>
		</div>
	</div>
	<div class="flex-none hidden sm:block">
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
		</ul>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1 text-lg">
			<li>
				<Toggle />
			</li>
		</ul>
	</div>
</div>
