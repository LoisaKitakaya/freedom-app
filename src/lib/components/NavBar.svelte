<script lang="ts">
	import { page } from '$app/stores';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, DarkMode } from 'flowbite-svelte';

	$: activeUrl = $page.url.pathname;

	let activeClass = 'text-orange-500 underline';
	let nonActiveClass = 'text-gray-700 dark:text-white hover:text-orange-500 hover:underline';
</script>

<div class="sticky top-0 z-10 flex min-h-[40px] items-center justify-center md:hidden">
	<Navbar class="w-full dark:bg-gray-700">
		<NavBrand href="/">
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
				>Loisa Kitakaya</span
			>
		</NavBrand>

		<div>
			<DarkMode />
			<NavHamburger />
		</div>

		<NavUl {activeUrl} {activeClass} {nonActiveClass}>
			<NavLi href="/">Home</NavLi>
			<NavLi href="/services">Services</NavLi>
			<NavLi href="/skills">Skills</NavLi>
			<NavLi href="/work">Work</NavLi>
			<NavLi href="/contact">Contact</NavLi>
		</NavUl>
	</Navbar>
</div>
