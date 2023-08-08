<script lang="ts">
	import { fade } from 'svelte/transition'
	import images from '../data/kamen.json'

	$: index = 0

	$: image = images[index]

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
</script>

<div class="carousel w-full">
	<div id="slide1" class="carousel-item relative w-full">
		<img src={image.image} alt={image.id.toString()} transition:fade loading="lazy" />
		<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
			<button class="btn btn-circle" on:click={() => changeIndex('left')}>❮</button>
			<button class="btn btn-circle" on:click={() => changeIndex('right')}>❯</button>
		</div>
	</div>
</div>
