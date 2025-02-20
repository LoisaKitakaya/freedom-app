<script lang="ts">
	import { Tabs, TabItem, Card, Button } from 'flowbite-svelte';
	import { Carousel } from 'flowbite-svelte';
	import webData from '$lib/data/web_dev_work.json';
	import designData from '$lib/data/graphic_design_work.json';

	interface Project {
		name: string;
		description: string;
		link: string;
		images: Image[];
	}

	interface Image {
		src: string;
		alt: string;
	}

	const webDevWork: Project[] = webData.projects;
	const designWork: Project[] = designData.projects;
</script>

<svelte:head>
	<title>Work</title>
</svelte:head>

<section class="upper-container min-h-screen w-full p-4 text-gray-900 dark:text-white">
	<Tabs style="underline" contentClass="!bg-white dark:!bg-gray-700 md:p-4 p-0 md:mt-20 mt-8">
		<TabItem open title="Websites & Web-apps">
			{#if webDevWork.length !== 0 || webDevWork.length > 1}
				<div class="job-container grid grid-cols-1 gap-16">
					{#each webDevWork as work}
						<div class="mx-auto flex w-4/5 flex-row flex-wrap gap-8 md:flex-nowrap">
							<Card class="!p-0">
								<Carousel images={work.images} duration={3900} let:Indicators class="mx-auto">
									<Indicators />
								</Carousel>
							</Card>

							<div class="flex w-full flex-col justify-between">
								<div>
									<h1 class="mb-4 text-2xl font-semibold">{work.name}</h1>

									<p>
										{work.description}
									</p>
								</div>

								<div class="mt-4 w-full">
									<Button href={work.link} class="w-full">Preview</Button>
								</div>
							</div>
						</div>
					{/each}
				</div>
			{:else}
				<div class="py-20 text-center">
					<p class="text-2xl font-semibold">Coming Soon!</p>
				</div>
			{/if}
		</TabItem>
		<TabItem title="Design Work">
			{#if designWork.length !== 0 || designWork.length > 1}
				<div class="job-container grid grid-cols-1 gap-16">
					{#each designWork as work}
						<div class="mx-auto flex w-4/5 flex-row flex-wrap gap-8 md:flex-nowrap">
							<Card class="!p-0">
								<Carousel images={work.images} duration={3900} let:Indicators class="mx-auto">
									<Indicators />
								</Carousel>
							</Card>

							<div class="flex w-full flex-col justify-between">
								<div>
									<h1 class="mb-4 text-2xl font-semibold">{work.name}</h1>

									<p>
										{work.description}
									</p>
								</div>

								<div class="mt-4 w-full">
									<Button href={work.link} class="w-full">Preview</Button>
								</div>
							</div>
						</div>
					{/each}
				</div>
			{:else}
				<div class="py-20 text-center">
					<p class="text-2xl font-semibold">Coming Soon!</p>
				</div>
			{/if}
		</TabItem>
	</Tabs>
</section>

<style>
	.job-container {
		height: 100% !important;
	}

	.upper-container {
		height: 100% !important;
	}

	/* Extra small devices (phones, 600px and down) */
	@media only screen and (max-width: 600px) {
		.job-container {
			height: 100% !important;
			overflow: visible;
			overflow-y: hidden;
		}
	}

	/* Small devices (portrait tablets and large phones, 600px and up) */
	@media only screen and (min-width: 600px) {
		.job-container {
			height: 980px !important;
			overflow: hidden;
			overflow-y: scroll;
		}
	}

	/* Medium devices (landscape tablets, 768px and up) */
	@media only screen and (min-width: 768px) {
		.upper-container {
			height: 100vh !important;
			overflow: hidden;
			overflow-y: scroll;
		}
	}

	/* Large devices (laptops/desktops, 992px and up) */
	@media only screen and (min-width: 992px) {
		.upper-container {
			height: 100vh !important;
			overflow: hidden;
			overflow-y: scroll;
		}
	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1200px) {
		.upper-container {
			height: 100vh !important;
			overflow: hidden;
			overflow-y: scroll;
		}
	}
</style>
