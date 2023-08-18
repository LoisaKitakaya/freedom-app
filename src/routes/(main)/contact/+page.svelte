<script>
	import * as config from '$lib/config'
	import toast, { Toaster } from 'svelte-french-toast'

	export let form

	if (form) {
		form.update.status === 'success'
			? toast.success(form.update.message)
			: toast.error('Something went wrong!')
	}
</script>

<svelte:head>
	<title>{config.title} | Contact</title>
</svelte:head>

<section class="px-8 sm:px-0 w-full main-section pt-32">
	<form
		method="POST"
		action="?/sendMessage"
		class="p-4 bg-base-100 m-auto w-full sm:w-2/5 rounded-md"
	>
		<div class="flex justify-between items-center mb-3 gap-4">
			<div class="flex justify-start flex-col gap-2">
				<label for="">First Name</label>
				<input
					type="text"
					name="firstName"
					placeholder="e.g. John"
					class="input input-bordered w-full max-w-xs"
				/>
			</div>
			<div class="flex justify-start flex-col gap-2">
				<label for="">Last Name</label>
				<input
					type="text"
					name="lastName"
					placeholder="e.g. Doe"
					class="input input-bordered w-full max-w-xs"
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
			/>
		</div>
		<div class="mb-3 flex justify-start flex-col gap-2">
			<label for="">Subject</label>
			<select name="subject" class="select select-bordered w-full">
				<option value="I want to hire you">I Want To Hire You</option>
				<option value="Pre-built apps">Pre Built Apps</option>
				<option value="Just saying hi!">Just Saying Hi!</option>
			</select>
		</div>
		<div class="mb-3 flex justify-start flex-col gap-2">
			<label for="">Your Message</label>
			<textarea name="message" class="textarea textarea-bordered" placeholder="How can I help?" />
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
