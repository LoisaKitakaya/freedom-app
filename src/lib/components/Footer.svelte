<script lang="ts">
	import * as config from '$lib/config'
	import { Github, Twitter, Rss, Mail } from 'lucide-svelte'
</script>

<footer class="flex flex-col sm:flex-row gap-4 justify-between items-center p-4 bg-base-100 text-base-content mt-8">
	<div class="flex justify-start items-center">
		<p class="text-lg">{config.title} &copy {new Date().getFullYear()}</p>
	</div>
	<div class="flex justify-end items-center gap-4">
		<a href="{config.url}/rss.xml" target="_blank"><Rss /></a>
		<a href="mailto:kitakayaloisa@gmail.com"><Mail /></a>
		<a href="https://twitter.com/FreedomLoisa"><Twitter /></a>
		<a href="https://github.com/LoisaKitakaya"><Github /></a>
	</div>
</footer>
