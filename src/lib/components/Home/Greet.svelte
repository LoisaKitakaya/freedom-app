<script>
	import { onMount } from 'svelte'
	import Typed from 'typed.js'

	const type = () => {
		new Typed('#greet', {
			strings: ["Hi I'm"],
			typeSpeed: 55,
			startDelay: 500,
            showCursor: false,
		})
	}

	onMount(() => {
		type()
	})
</script>

<!-- svelte-ignore a11y-missing-content -->
<h3 id="greet" class="text-center" />

<style>
	h3 {
		font-size: 48px;
	}
</style>
