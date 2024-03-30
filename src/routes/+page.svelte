<script lang="ts">
	import { Button } from 'flowbite-svelte';
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
			class="bg-gray-200 text-black dark:bg-gray-600 dark:text-white">Portfolio</Button
		>
	</div>
</section>

<style>
	/* #banner {
		background-color: #ffffff;
		background-color: #ff7700;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23b5744d' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23a63734' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23a10d2f' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23972d32' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23c24e78' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23a0385e' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23b90a67' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%2384755d' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%239d2b7c' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23872a89' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23a72aa6' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23a89686' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
		background-attachment: fixed;
		background-size: cover;
	} */
</style>
