<script>
	import Greet from '$lib/components/Home/Greet.svelte'
	import Intro from '$lib/components/Home/Intro.svelte'
	import Name from '$lib/components/Home/Name.svelte'
	import * as config from '$lib/config'
</script>

<svelte:head>
	<title>{config.title} | Home</title>
</svelte:head>

<section class="px-8 sm:px-0 w-full main-section">
	<div id="text-container" class="w-full sm:w-6/12 h-fit m-auto">
		<Greet />
		<Name />
		<div class="divider" />
		<Intro />
	</div>
	<span id="typed" />
</section>

<style>
	section {
		height: 100vh;
	}

	#text-container {
		padding-top: 7rem;
	}

	.divider {
		margin: 0;
		padding: 0;
	}
</style>
