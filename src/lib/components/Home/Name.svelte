<script>
	import { onMount } from 'svelte'
	import Typed from 'typed.js'

	const type = () => {
		new Typed('#name', {
			strings: ['Loisa Kitakaya'],
			typeSpeed: 65,
			startDelay: 2000,
            showCursor: false,
		})
	}

	onMount(() => {
		type()
	})
</script>

<!-- svelte-ignore a11y-missing-content -->
<h1 id="name" class="text-center" />

<style>
	h1 {
		font-size: 72px;
		font-weight: bold;
	}
</style>
