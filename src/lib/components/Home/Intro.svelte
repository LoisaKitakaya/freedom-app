<script>
	import { onMount } from 'svelte'
	import Typed from 'typed.js'

	const type = () => {
		new Typed('#intro', {
			strings: ['A full-stack ^300 web applications developer 🚀'],
			typeSpeed: 60,
			startDelay: 8800,
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
