<script lang="ts">
	import { Github, Twitter, Rss, Mail, ChevronLeft, ChevronRight } from 'lucide-svelte'

	import * as config from '$lib/config'
	import { onMount } from 'svelte'

	const routes = ['/', '/about', '/portfolio', '/reviews', '/contact']

	let previous: string
	let next: string

	onMount(() => {
		const currentPath = window.location.pathname

		const currentIndex = routes.indexOf(currentPath)
		if (currentIndex >= 0) {
			previous = routes[currentIndex - 1] || '/'
			next = routes[currentIndex + 1] || '/'
		}
	})

	const navigate = (path: string) => {
		window.location.href = path
	}
</script>

<div id="socials" class="flex justify-center items-center gap-4 z-20">
	<a href="{config.url}/rss.xml" target="_blank"><Rss /></a>
	<a href="mailto:kitakayaloisa@gmail.com"><Mail /></a>
	<a href="https://twitter.com/FreedomLoisa"><Twitter /></a>
	<a href="https://github.com/LoisaKitakaya"><Github /></a>
</div>

<div id="arrows" class="z-20">
	<div class="tooltip" data-tip="previous">
		<button id="nav-left" on:click={() => navigate(previous)}>
			<ChevronLeft />
		</button>
	</div>
	<div class="tooltip" data-tip="next">
		<button id="nav-right" on:click={() => navigate(next)}>
			<ChevronRight />
		</button>
	</div>
</div>

<style>
	#socials {
		position: fixed;
		bottom: 2rem;
		left: 3rem;
	}

	#arrows {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 2rem;
		position: fixed;
		bottom: 2rem;
		right: 3rem;
	}

	@media only screen and (max-width: 600px) {
		#socials {
			bottom: 1rem !important;
			left: 1rem !important;
		}

		#arrows {
			bottom: 1rem !important;
			right: 1rem !important;
		}
	}
</style>
