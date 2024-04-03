<script lang="ts">
	import { Tabs, TabItem, Card, Button } from 'flowbite-svelte';
	import { Carousel } from 'flowbite-svelte';
	import webData from '$lib/data/web_dev_work.json';
	import designData from '$lib/data/graphic_design_work.json';

	const webDevWork = webData.projects;
	const designWork = designData.projects;
</script>

<svelte:head>
	<title>Work</title>
</svelte:head>

<section class="min-h-screen w-full p-4 text-gray-900 dark:text-white">
	<Tabs style="underline" contentClass="!bg-white dark:!bg-gray-700 md:p-4 p-0 md:mt-20 mt-8">
		<TabItem open title="Websites & Web-apps">
			<div class="grid grid-cols-1 gap-16">
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
		</TabItem>
		<TabItem title="Design Work">
			<div class="grid grid-cols-1 gap-16">
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
		</TabItem>
	</Tabs>
</section>
