<script lang="ts">
	import { onMount } from 'svelte'

	onMount(() => {
		window.addEventListener('scroll', handleScroll)
	})

	let button: HTMLButtonElement

	const handleScroll = () => {
		if (button) {
			if (button && typeof window !== 'undefined') {
				if (window.scrollY > 600) {
					button.style.display = 'block'
				} else {
					button.style.display = 'none'
				}
			}
		}
	}

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}
</script>

<div class="right-10 bottom-14 fixed">
	<button
		class="btn btn-circle shadow-md m-0 p-0 transition-all duration-300"
		bind:this={button}
		on:click={scrollToTop}><i class="bi bi-chevron-up" /></button
	>
</div>
