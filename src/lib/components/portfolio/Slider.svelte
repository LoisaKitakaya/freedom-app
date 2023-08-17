<script lang="ts">
	// @ts-nocheck
	import data from '$lib/work.json'
	import { onMount } from 'svelte'
	import { ChevronsLeft, ChevronsRight } from 'lucide-svelte'

	let activeTab = 'screenshots'

	const switchTab = (tab) => {
		activeTab = tab
	}

	const images = []
	const details = []

	data.forEach((item) => {
		const imageArray = item.images

		images.push(imageArray)

		const filteredItem = {
			title: item.title,
			description: item.description,
			technologies: item.technologies,
			role: item.role,
			features: item.features,
			link: item.link
		}

		details.push(filteredItem)
	})

	$: index = 0

	$: image = images[index]
	$: detail = details[index]

	function changeIndex(direction: 'left' | 'right') {
		if (direction === 'left') {
			index -= 1
		} else {
			index += 1
		}

		if (index < 0) {
			index = images.length - 1
		} else if (index >= images.length) {
			index = 0
		}
	}

	let counter = 0
	const intervalTime = 5000
	let interval

	const nextSlide = () => {
		counter = (counter + 1) % image.length
	}

	const startAutoplay = () => {
		interval = setInterval(nextSlide, intervalTime)
	}

	const stopAutoplay = () => {
		clearInterval(interval)
	}

	onMount(() => {
		startAutoplay()
	})
</script>

<div class="m-auto rounded-md w-full sm:w-3/5 pt-32 sm:pt-8 pb-32 sm:pb-0 px-8 sm:px-0">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="tabs w-fit m-auto">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-missing-attribute -->
		<a
			class="tab tab-bordered"
			class:tab-active={activeTab === 'screenshots'}
			on:click={() => switchTab('screenshots')}>Preview</a
		>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-missing-attribute -->
		<a
			class="tab tab-bordered"
			class:tab-active={activeTab === 'details'}
			on:click={() => switchTab('details')}>Details</a
		>
	</div>
	<div class="tab-content">
		{#if activeTab === 'screenshots'}
			<p class="text-xl text-center mt-2 underline">{detail.title}</p>
			<div class="cont bg-base-100">
				<div class="carousel-container">
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<!-- svelte-ignore a11y-mouse-events-have-key-events -->
					<div class="carousel" on:mouseover={stopAutoplay} on:mouseout={startAutoplay}>
						{#each image as img (img.id)}
							<img
								src={img.url}
								alt={img.id}
								class="transition shadow-md rounded-md border border-base-300"
								style="transform: translateX(-{counter * 100}%);"
							/>
						{/each}
					</div>
				</div>
			</div>
		{/if}
		{#if activeTab === 'details'}
			<p class="text-xl text-center mt-2 underline">{detail.title}</p>
			<div class="cont bg-base-100">
				<div class="mb-3">
					<span class="font-semibold">Description:</span>
					<p>{detail.description}</p>
				</div>
				<div class="mb-3">
					<span class="font-semibold">My Role:</span>
					<p>{detail.role}</p>
				</div>
				<div class="mb-3">
					<span class="font-semibold">Technologies used:</span>
					<ul>
						{#each detail.technologies as tech}
							<li>▶️ {tech}</li>
						{/each}
					</ul>
				</div>
				<div class="mb-3">
					<span class="font-semibold">Features:</span>
					<ul>
						{#each detail.features as feat}
							<li>▶️ {feat}</li>
						{/each}
					</ul>
				</div>
				<div class="mb-3">
					<span class="font-semibold">Link:</span>
					<a href={detail.link} class="underline text-base-content">{detail.title}</a>
				</div>
			</div>
		{/if}
	</div>
	<div class="mt-4 flex justify-center align-center gap-4">
		<div class="tooltip tooltip-left" data-tip="previous project">
			<button on:click={() => changeIndex('left')}><ChevronsLeft /></button>
		</div>
		<div class="tooltip tooltip-right" data-tip="next project">
			<button on:click={() => changeIndex('right')}><ChevronsRight /></button>
		</div>
	</div>
</div>

<style>
	.cont {
		margin-top: 1rem;
	}

	.carousel-container {
		width: 100%;
		overflow: hidden;
	}

	.carousel {
		display: flex;
		transition: transform 0.5s ease-in-out;
	}
</style>
