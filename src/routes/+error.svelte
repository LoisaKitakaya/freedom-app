<script>
	import { page } from '$app/stores'
</script>

<div class="error">
	<h1 class="text-2xl font-bold">{$page.status}: {$page.error?.message}</h1>
</div>

<style>
	.error {
		height: 100%;
		display: grid;
		place-content: center;
	}
</style>
