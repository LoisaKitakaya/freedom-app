<script>
	import { onMount } from 'svelte'
	import Typed from 'typed.js'

	const type = () => {
		new Typed('#intro', {
			strings: ['A full-stack  web applications developer ^1000 🚀'],
			typeSpeed: 55,
			startDelay: 8100,
            showCursor: false,
		})
	}

	onMount(() => {
		type()
	})
</script>

<!-- svelte-ignore a11y-missing-content -->
<h2 id="intro" class="text-center" />

<style>
	h2 {
		font-size: 56px;
	}
</style>
