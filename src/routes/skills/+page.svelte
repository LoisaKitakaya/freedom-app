<script lang="ts">
	import { Progressbar } from 'flowbite-svelte';
	import { sineOut } from 'svelte/easing';
	import data from '$lib/data/skills.json';

	let generalSkills = data.general_skills;
	let toolsAndTechnologies = data.tools_and_technologies;
</script>

<svelte:head>
	<title>Skills</title>
</svelte:head>

<section class="min-h-screen w-full p-4 text-gray-900 dark:text-white">
	<div class="mt-20 h-fit">
		<div class="mb-10 text-center">
			<h1 class="text-3xl font-semibold">My Skill-Set</h1>
			<span class="text-lg italic"
				>An overview of the skills & tools I use to bring your projects to fruition.</span
			>
		</div>

		<div class="mb-4">
			<h1 class="mb-2 text-lg font-semibold">General Skills</h1>
			<div class="grid grid-cols-4 gap-4">
				{#each generalSkills as skill}
					<div>
						<div class="mx-2 mb-1 text-base font-semibold dark:text-white">{skill.name}</div>

						<Progressbar
							progress={skill.score}
							animate
							precision={2}
							labelInside
							tweenDuration={3000}
							easing={sineOut}
							size="h-6"
							labelInsideClass="bg-blue-600 text-blue-100 text-base font-semibold text-center p-1 leading-none rounded-full"
							class="bg-gray-200 dark:bg-gray-600 dark:!text-white"
						/>
					</div>
				{/each}
			</div>
		</div>

		<div class="mb-4">
			<h1 class="mb-2 text-lg font-semibold">Tools & Technologies</h1>
			<div class="grid grid-cols-4 gap-4">
				{#each toolsAndTechnologies as stack}
					<div>
						<div class="mx-2 mb-1 text-base font-semibold dark:text-white">{stack.name}</div>

						<Progressbar
							progress={stack.score}
							animate
							precision={2}
							labelInside
							tweenDuration={3000}
							easing={sineOut}
							size="h-6"
							labelInsideClass="bg-blue-600 text-blue-100 text-base font-semibold text-center p-1 leading-none rounded-full"
							class="bg-gray-200 dark:bg-gray-600 dark:!text-white"
						/>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
