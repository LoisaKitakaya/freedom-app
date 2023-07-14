<script lang="ts">
	import { enhance } from '$app/forms'
	import * as config from '$lib/config'
	import { light, dark } from '$lib/theme'
	import { Sun, Moon, SunMoon } from 'lucide-svelte'

	// @ts-ignore
	const updateTheme = ({ action }) => {
		const theme = action.searchParams.get('theme')

		if (theme) {
			document.documentElement.setAttribute('data-theme', theme)
		}
	}
</script>

<div class="navbar bg-base-100">
	<div class="flex-1">
		<a href="/" class="px-4 normal-case text-xl">{config.title}</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
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
				<a href="/rss.xml" target="_blank">RSS</a>
			</li>
			<li>
				<details class="z-10">
					<summary> <SunMoon /> </summary>
					<ul class="p-2 bg-base-100">
						<form method="POST" use:enhance={updateTheme}>
							<li>
								<button formaction="/?/setTheme&theme={$light}"><Sun /></button>
							</li>
							<li>
								<button formaction="/?/setTheme&theme={$dark}"><Moon /></button>
							</li>
						</form>
					</ul>
				</details>
			</li>
		</ul>
	</div>
</div>
