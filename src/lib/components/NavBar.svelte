<script lang="ts">
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<div class="sticky top-0 z-10 flex min-h-[40px] items-center justify-center border-b md:hidden">
	<Navbar class="w-full">
		<NavBrand href="/">
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
				>Loisa Kitakaya</span
			>
		</NavBrand>
		<NavHamburger />
		<NavUl>
			<NavLi href="/">Home</NavLi>
			<NavLi href="/services">Services</NavLi>
			<NavLi href="/skills">Skills</NavLi>
			<NavLi href="/work">Work</NavLi>
			<NavLi href="/contact">Contact</NavLi>
		</NavUl>
	</Navbar>
</div>
