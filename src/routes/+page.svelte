<script lang="ts">
	import moment from 'moment'
	import * as config from '$lib/config'
	import { fade } from 'svelte/transition'

	export let data

	const { events } = data

	const getName = (name: string) => {
		const parts = name.split('/')

		return parts[parts.length - 1]
	}

	const format = (data: any) => {
		return JSON.stringify(data, null, 2)
	}
</script>

<svelte:head>
	<title>{config.title} | Home</title>
</svelte:head>

<div out:fade={{ duration: 400 }}
	in:fade={{ delay: 400, duration: 400 }}>
	<h1 class="text-lg mb-8 text-center underline">My recent <strong>GitHub</strong> activity</h1>

	<section class="w-3/5 mx-auto">
		{#each events as event (event.id)}
			<div class="py-4 px-10 mb-4 flex justify-start items-center gap-4">
				<div class="tooltip" data-tip={event.actor.login}>
					<a href={event.actor.url}
						><div class="avatar">
							<div class="w-12 rounded-full">
								<img src={event.actor.avatar_url} alt={event.actor.display_login} />
							</div>
						</div></a
					>
				</div>
				<div>
					<div class="flex justify-start items-center gap-4 mb-2 flex-wrap">
						<p>
							<span class="font-semibold">Repo:</span>
							<a href={event.repo.url} class="link link-hover">{getName(event.repo.name)}</a>
						</p>
						<p>
							<span class="font-semibold">Status:</span>
							{event.public ? 'Public' : 'Private'}
						</p>
						<p><span class="font-semibold">Event:</span> {event.type}</p>
					</div>
					<p><span class="font-semibold">Last:</span> {moment(event.created_at).fromNow()}</p>
				</div>
			</div>
			<details class="collapse bg-base-200">
				<summary class="collapse-title">Show Payload - Click to open/close</summary>
				<div class="collapse-content">
					<pre class="overflow-x-auto">
						<code>
							{format(event.payload)}
						</code>
					</pre>
				</div>
			</details>
			<div class="divider">🔥</div>
		{/each}
	</section>
</div>
