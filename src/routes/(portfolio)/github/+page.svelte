<script lang="ts">
	import moment from 'moment'
	import * as config from '$lib/config'

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

<div class="pb-32 sm:pb-16 pt-16">
	<h1 class="text-lg mb-8 text-center underline">My <strong>GitHub</strong> activity</h1>

	<section class="w-3/4 sm:w-3/6 mx-auto">
		{#each events as event (event.id)}
			<div class="py-2 sm:py-4 px-4 sm:px-10 mb-4 flex justify-center items-center gap-4">
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
			<div class="divider">🔥</div>
		{/each}
	</section>
</div>
