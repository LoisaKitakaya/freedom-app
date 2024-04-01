<script lang="ts">
	import { Button } from 'flowbite-svelte';

	const clearActive = () => {
		const navLinks = document.querySelectorAll('.nav-link');

		navLinks.forEach((link) => {
			link.classList.remove('text-orange-500');
		});
	};

	const changeColor = (index: number) => {
		clearActive();

		const anchor = document.querySelectorAll('.nav-link');

		anchor[index]?.classList.add('text-orange-500');
	};
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="min-h-screen w-full p-4 text-gray-900 dark:text-white" id="banner">
	<div class="m-auto flex h-fit w-fit flex-col items-center gap-8 pt-64">
		<h1 class="text-3xl font-semibold">
			I am a <strong>fullstack developer</strong> & <strong>graphic designer</strong>
		</h1>
		<span class="text-lg italic">I Design & Develop Solutions You'll Love</span>
		<Button href="/work" on:click={() => changeColor(3)}>Portfolio</Button>
	</div>
</section>

<style>
	/* #banner {} */
</style>
