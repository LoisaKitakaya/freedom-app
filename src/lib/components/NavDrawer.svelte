<script lang="ts">
	import { DarkMode } from 'flowbite-svelte';
	import { onMount } from 'svelte';

	const setActiveLink = () => {
		const currentPath = window.location.pathname;

		const navLinks = document.querySelectorAll('.nav-link');

		navLinks.forEach((link) => {
			const linkPath = link.getAttribute('href');

			if (currentPath === linkPath || currentPath.startsWith(linkPath + '/')) {
				link.classList.add('text-rose-600');
			} else {
				link.classList.remove('text-rose-600');
			}
		});
	};

	const changeColor = () => {
		const navLinks = document.querySelectorAll('.nav-link');

		navLinks.forEach((link) => {
			link.classList.remove('text-rose-600');

			const linkPath = link.getAttribute('href');

			const currentPath = window.location.pathname;

			if (currentPath === linkPath || currentPath.startsWith(linkPath + '/')) {
				link.classList.add('text-rose-600');
			} else {
				link.classList.remove('text-rose-600');
			}
		});
	};

	// onMount(() => {
	// 	setActiveLink();

	// 	window.addEventListener('popstate', setActiveLink);
	// });
</script>

<div class="fixed h-screen w-64 border-r bg-gray-200 px-4 py-2 dark:bg-gray-600 dark:text-white">
	<div class="mb-4 flex flex-row items-center justify-between">
		<span class="font-semibold">Menu</span>
		<DarkMode />
	</div>

	<div class="mb-8">
		<img
			src="https://ik.imagekit.io/vg0ett8n6/default-image.jpg?updatedAt=1689836212999"
			alt="Profile"
			class="rounded-full"
		/>
	</div>

	<p class="mb-2 text-center text-3xl font-semibold">Loisa Kitakaya</p>
	<p class="mb-12 text-center text-lg italic">Fullstack developer & graphic designer</p>

	<ul class="mb-14 text-center">
		<li><a class="nav-link" href="/">Home</a></li>
		<li><a class="nav-link" href="/services">Services</a></li>
		<li><a class="nav-link" href="/skills">Skills</a></li>
		<li><a class="nav-link" href="/work">Work</a></li>
		<li><a class="nav-link" href="/contact">Contact</a></li>
	</ul>

	<p class="text-center text-sm italic">
		<span class="text-xl">©</span>
		{new Date().getFullYear()} Loisa Kitakaya - All Rights Reserved
	</p>
</div>
