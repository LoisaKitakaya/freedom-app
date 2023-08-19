<script>
	// @ts-nocheck

	import * as config from '$lib/config'
	import toast, { Toaster } from 'svelte-french-toast'
	import { enhance } from '$app/forms'

	const sendMsg = ({ formElement, formData, action }) => {
		return async ({ result, update }) => {
			if (result.type === 'success') {
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

<svelte:head>
	<title>{config.title} | Contact</title>
</svelte:head>

<section class="px-8 sm:px-0 w-full main-section pt-28">
	<form
		method="POST"
		action="?/sendMessage"
		class="p-4 bg-base-100 m-auto w-full sm:w-2/5 rounded-md"
		use:enhance={sendMsg}
	>
		<div class="flex justify-between items-center mb-3 gap-4">
			<div class="flex justify-start flex-col gap-2">
				<label for="">First Name</label>
				<input
					type="text"
					name="firstName"
					placeholder="e.g. John"
					class="input input-bordered w-full max-w-xs"
					required
				/>
			</div>
			<div class="flex justify-start flex-col gap-2">
				<label for="">Last Name</label>
				<input
					type="text"
					name="lastName"
					placeholder="e.g. Doe"
					class="input input-bordered w-full max-w-xs"
					required
				/>
			</div>
		</div>
		<div class="flex justify-start flex-col gap-2 mb-3">
			<label for="">Email</label>
			<input
				type="text"
				name="email"
				placeholder="e.g. johndoe@email.com"
				class="input input-bordered w-full"
				required
			/>
		</div>
		<div class="mb-3 flex justify-start flex-col gap-2">
			<label for="">Subject</label>
			<select name="subject" class="select select-bordered w-full" required>
				<option value="I want to hire you">I Want To Hire You</option>
				<option value="Pre-built apps">Pre Built Apps</option>
				<option value="Just saying hi!">Just Saying Hi!</option>
			</select>
		</div>
		<div class="mb-6 flex justify-start flex-col gap-2">
			<label for="">Your Message</label>
			<textarea
				name="message"
				class="textarea textarea-bordered"
				placeholder="How can I help?"
				required
			/>
		</div>
		<button type="submit" class="btn btn-success w-full">Send</button>
	</form>
</section>

<Toaster />

<style>
	section {
		height: 100vh;
	}

	label {
		padding-left: 1.1rem;
	}
</style>
