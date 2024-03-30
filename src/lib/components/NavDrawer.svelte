<script lang="ts">
	import { DarkMode } from 'flowbite-svelte';

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

<div
	class="fixed flex h-screen w-64 flex-col gap-12 bg-gray-200 px-4 py-2 dark:bg-gray-600 dark:text-white"
>
	<div class="flex flex-row items-center justify-between">
		<span class="font-semibold">Menu</span>
		<DarkMode />
	</div>

	<div class="flex h-full flex-col justify-between">
		<div class="profile">
			<img
				src="https://ik.imagekit.io/vg0ett8n6/Docs/78635122.png?updatedAt=1692188316721"
				alt="Profile"
				class="m-auto w-3/4 rounded-full"
			/>
		</div>

		<div>
			<p class="text-center text-3xl font-semibold">Loisa Kitakaya</p>
			<p class="text-center italic">Fullstack developer & graphic designer</p>
		</div>

		<ul class="ml-20 w-fit text-lg">
			<li>
				<a
					class="nav-link hover:text-rose-500 hover:underline"
					href="/"
					on:click={() => changeColor(0)}>Home</a
				>
			</li>
			<li>
				<a
					class="nav-link hover:text-rose-500 hover:underline"
					href="/services"
					on:click={() => changeColor(1)}>Services</a
				>
			</li>
			<li>
				<a
					class="nav-link hover:text-rose-500 hover:underline"
					href="/skills"
					on:click={() => changeColor(2)}>Skills</a
				>
			</li>
			<li>
				<a
					class="nav-link hover:text-rose-500 hover:underline"
					href="/work"
					on:click={() => changeColor(3)}>Work</a
				>
			</li>
			<li>
				<a
					class="nav-link hover:text-rose-500 hover:underline"
					href="/contact"
					on:click={() => changeColor(4)}>Contact</a
				>
			</li>
		</ul>

		<div>
			<p class="text-center text-sm italic">
				<span class="text-xl">©</span>
				{new Date().getFullYear()} Loisa Kitakaya
			</p>
		</div>
	</div>
</div>

<style>
	.profile {
		animation-name: spin;
		animation-delay: 3s;
		animation-duration: 60s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
		transition-delay: 150ms;
		transition-duration: 3s;
		transition-timing-function: ease-in-out;
	}

	.profile:hover {
		animation: none;
	}

	a {
		transition-duration: 200ms;
		transition-timing-function: ease-in-out;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		} /* Start at 0 degrees rotation */
		to {
			transform: rotate(360deg);
		} /* End at 360 degrees rotation */
	}
</style>
