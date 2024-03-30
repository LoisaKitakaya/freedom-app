<script lang="ts">
	import { Button } from 'flowbite-svelte';

	const clearActive = () => {
		const navLinks = document.querySelectorAll('.nav-link');

		navLinks.forEach((link) => {
			link.classList.remove('text-rose-500');
		});
	};

	const changeColor = (index: number) => {
		clearActive();

		const anchor = document.querySelectorAll('.nav-link');

		anchor[index]?.classList.add('text-rose-500');
	};
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="min-h-screen p-4 dark:text-white" id="banner">
	<div class="m-auto flex h-fit w-fit flex-col items-center gap-8 pt-64">
		<h1 class="text-3xl font-semibold">
			I am a <strong>fullstack developer</strong> & <strong>graphic designer</strong>
		</h1>
		<span class="text-lg italic">I Design & Develop Solutions You'll Love</span>
		<Button
			href="/work"
			color="light"
			on:click={() => changeColor(3)}
			class="bg-gray-200 text-black dark:bg-gray-600 dark:text-white">Portfolio</Button
		>
	</div>
</section>

<style>
	/* #banner {} */
</style>
