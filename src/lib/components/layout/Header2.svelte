<script lang="ts">
	import '../../../app.css'

	import { fly } from 'svelte/transition'
	import { Moon, Settings2, ShoppingCart, Sun } from 'lucide-svelte'
	import { enhance } from '$app/forms'
	import type { SubmitFunction } from '@sveltejs/kit';

	let mode: string

	const updateTheme: SubmitFunction = ({ action }) => {
		const theme = action.searchParams.get('theme')

		if (theme) {
			document.documentElement.setAttribute('data-theme', theme)
			mode = theme
		}
	}
</script>

<div class="navbar bg-base-100">
	<div class="flex-1">
		<!-- svelte-ignore a11y-missing-attribute -->
		<a class="btn btn-ghost normal-case text-xl" href="/">Portfolio</a>
	</div>
	<div class="flex-none">
		<form method="POST" use:enhance={updateTheme}>
			{#if mode !== 'dracula'}
				<button
					formaction="/?/setTheme&theme=dracula"
					aria-label="Toggle dark"
					in:fly={{ y: -10 }}
					class="btn btn-ghost btn-circle"
				>
					<Moon />
				</button>
			{:else}
				<button
					formaction="/?/setTheme&theme=fantasy"
					aria-label="Toggle Light"
					in:fly={{ y: 10 }}
					class="btn btn-ghost btn-circle"
				>
					<Sun />
				</button>
			{/if}
		</form>
		<div class="mr-2" />

		<div class="dropdown dropdown-end">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost btn-circle">
				<div class="indicator">
					<ShoppingCart />
					<span class="badge badge-sm indicator-item">8</span>
				</div>
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<div
				tabindex="0"
				class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
			>
				<div class="card-body">
					<span class="font-bold text-lg">8 Items</span>
					<span class="text-info">Subtotal: $999</span>
					<div class="card-actions">
						<button class="btn btn-primary btn-block">View cart</button>
					</div>
				</div>
			</div>
		</div>
		<div class="mr-4" />
		<div class="dropdown dropdown-end">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost btn-circle">
				<Settings2 />
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<a class="justify-between">
						Profile
						<span class="badge">New</span>
					</a>
				</li>
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a>Settings</a></li>
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a>Logout</a></li>
			</ul>
		</div>
	</div>
</div>
