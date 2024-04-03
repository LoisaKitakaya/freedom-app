<script lang="ts">
	import { Card, Button } from 'flowbite-svelte';

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
	<title>Services</title>
</svelte:head>

<section class="min-h-screen w-full p-4 text-gray-900 dark:text-white">
	<div class="md:mt-20 mt-0 flex h-fit flex-row justify-evenly flex-wrap md:gap-0 gap-8">
		<Card class="w-96 bg-gray-50">
			<div class="flex flex-col items-center gap-2">
				<div class="flex justify-center">
					<img
						src="https://res.cloudinary.com/dit0fii18/image/upload/v1711789529/web-page-website-svgrepo-com_crlfru.png"
						class="w-2/3"
						alt="Icon"
						loading="lazy"
					/>
				</div>

				<div class="mb-1 mt-2">
					<h5 class="text-xl font-medium text-gray-900 dark:text-white">Website Development</h5>
				</div>

				<div class="text-center">
					<p class="text-sm text-gray-500 dark:text-gray-400">
						I specialize in comprehensive web development services, covering both front-end design &
						back-end functionality. From crafting elegant user interfaces to building powerful
						back-end systems, I ensure a seamless & efficient website experience. My expertise
						extends to full-stack development, delivering cohesive solutions for your digital
						projects.
					</p>
				</div>

				<div class="mt-4 w-full">
					<Button href="/contact" on:click={() => changeColor(4)} class="w-full">Say HI!</Button>
				</div>
			</div>
		</Card>
		<Card class="w-96 bg-gray-50">
			<div class="flex flex-col items-center gap-2">
				<div class="flex justify-center">
					<img
						src="https://res.cloudinary.com/dit0fii18/image/upload/v1711789529/magazine-svgrepo-com_la9ejc.png"
						class="w-2/3"
						alt="Icon"
						loading="lazy"
					/>
				</div>

				<div class="mb-1 mt-2">
					<h5 class="text-xl font-medium text-gray-900 dark:text-white">Brand Identity Design</h5>
				</div>

				<div class="text-center">
					<p class="text-sm text-gray-500 dark:text-gray-400">
						My focus lies in crafting cohesive brand identities that leave a lasting impact. Whether
						it's designing websites, creating graphic elements, or producing eye-catching posters, I
						ensure consistency across all touchpoints. With meticulous attention to detail, I help
						you create a unified brand experience that resonates with your audience.
					</p>
				</div>

				<div class="mt-4 w-full">
					<Button href="/contact" on:click={() => changeColor(4)} class="w-full">Say HI!</Button>
				</div>
			</div>
		</Card>
	</div>
</section>
