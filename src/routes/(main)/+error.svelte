<script>
	import { page } from '$app/stores'
</script>

<h1 class="text-2xl font-bold">{$page.status}: {$page.error?.message}</h1>
