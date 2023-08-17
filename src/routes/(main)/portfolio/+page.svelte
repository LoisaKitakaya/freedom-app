<script>
	import Slider from '$lib/components/portfolio/Slider.svelte'
	import * as config from '$lib/config'
</script>

<svelte:head>
	<title>{config.title} | Portfolio</title>
</svelte:head>

<section class="px-8 sm:px-0 w-full main-section">
	<Slider />
</section>

<style>
	section {
		height: 100vh;
	}
</style>
