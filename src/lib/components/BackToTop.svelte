<script lang="ts">
	import { onMount } from 'svelte'
	import { fade } from 'svelte/transition'

	onMount(() => {
		window.addEventListener('scroll', handleScroll)
	})

	let button: HTMLButtonElement

	const handleScroll = () => {
		if (button) {
			if (window.scrollY > 300) {
				button.style.display = 'block'
			} else {
				button.style.display = 'none'
			}
		}
	}

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}
</script>

<div
	class="right-10 bottom-14 fixed"
	out:fade={{ duration: 400 }}
	in:fade={{ delay: 400, duration: 400 }}
>
	<button
		class="btn btn-circle shadow-md m-0 p-0 transition-all duration-300"
		bind:this={button}
		on:click={scrollToTop}><i class="bi bi-chevron-up" /></button
	>
</div>
