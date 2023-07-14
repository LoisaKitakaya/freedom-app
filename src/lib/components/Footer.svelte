<script lang="ts">
	import * as config from '$lib/config'
	import { Github, Twitter } from 'lucide-svelte'
</script>

<footer class="footer items-center p-4 bg-base-100 text-base-content mt-8 border-t">
	<div class="items-center grid-flow-col">
		<p>{config.title} &copy {new Date().getFullYear()}</p>
	</div>
	<div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
		<a href="https://github.com/LoisaKitakaya"><Github /></a>
		<a href="https://twitter.com/FreedomLoisa"><Twitter /></a>
	</div>
</footer>
