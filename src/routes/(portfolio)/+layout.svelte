<script lang="ts">
	import '../../app.css'
	import { onMount } from 'svelte'
	import toast, { Toaster } from 'svelte-french-toast'
	import type { SubmitFunction } from '@sveltejs/kit'
	import { enhance } from '$app/forms'

	import { Menu, Scroll, Gem, Github } from 'lucide-svelte'

	import Header from '$lib/components/layout/Header.svelte'
	import Footer from '$lib/components/layout/Footer.svelte'

	import { fade } from 'svelte/transition'

	export let data

	let isNavLinksVisible = false

	onMount(() => {
		isNavLinksVisible = false

		let modal: HTMLElement | null

		if (typeof window !== 'undefined') {
			modal = document.getElementById('resume')
		}

		const openModal = () => {
			//@ts-ignore
			modal.showModal()
		}

		const closeModal = () => {
			//@ts-ignore
			modal.close()
		}

		//@ts-ignore
		document.getElementById('resume-modal').addEventListener('click', openModal)
		//@ts-ignore
		document.getElementById('resume-close-modal').addEventListener('click', closeModal)
	})

	function toggleNavLinks() {
		isNavLinksVisible = !isNavLinksVisible
	}

	const resume: SubmitFunction = ({ formElement, formData, action }) => {
		return async ({ result, update }) => {
			if (result.type === 'success') {
				// @ts-ignore
				const res = result.data.update

				switch (res.status) {
					case 'success':
						toast.success(res.message)
						console.log(res)
						break
					case 'error':
						toast.success(res.message)
						break
				}

				await update()
			} else {
				toast.error('Something went wrong')
			}
		}
	}
</script>

<div class="drawer">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<div id="menu" class="z-20">
			<label for="my-drawer" id="menu-btn" class="drawer-button cursor-pointer">
				<Menu />
			</label>
		</div>

		<!--  -->

		<Header />

		{#key data.url}
			<div out:fade={{ duration: 400 }} in:fade={{ delay: 400, duration: 400 }}>
				<slot />
			</div>
		{/key}

		<Footer />

		<!--  -->
	</div>
	<div class="drawer-side z-30">
		<label for="my-drawer" class="drawer-overlay" />
		<ul class="menu p-4 w-60 h-full bg-base-200 text-base-content">
			<p class="pl-4 text-xl font-semibold mb-4">Menu</p>
			<!-- Sidebar content here -->
			<li>
				<button id="resume-modal"><Scroll /> Resume</button>
			</li>
			<li><a href="/shop"><Gem /> Shop / Pre-built</a></li>
			<li>
				<ul>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
					<li on:click={toggleNavLinks}>
						<p class="pl-4 font-semibold">Navigation</p>
					</li>
					<div class:hidden={!isNavLinksVisible}>
						<li>
							<a href="/">▶️ Home</a>
						</li>
						<li>
							<a href="/about">▶️ About</a>
						</li>
						<li>
							<a href="/portfolio">▶️ Portfolio</a>
						</li>
						<li>
							<a href="/contact">▶️ Contact</a>
						</li>
						<li>
							<a href="/github">▶️ GitHub</a>
						</li>
					</div>
				</ul>
			</li>
		</ul>
	</div>
</div>

<dialog id="resume" class="modal">
	<div class="modal-box w-fit">
		<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" id="resume-close-modal"
			>✕</button
		>
		<h3 class="font-bold text-lg mb-3">Get it in your inbox</h3>
		<form action="/?/requestResume" method="POST" use:enhance={resume}>
			<!-- modal body -->
			<input
				type="email"
				required
				name="email"
				placeholder="Your email address"
				class="input input-bordered w-full mb-3"
			/>
			<button type="submit" class="btn btn-success w-full">Submit</button>
		</form>
	</div>
</dialog>

<Toaster />

<style>
	#menu {
		position: fixed;
		top: 2rem;
		left: 3rem;
	}

	@media only screen and (max-width: 600px) {
		#menu {
			top: 1rem !important;
			left: 1rem !important;
		}
	}
</style>
