<script>
	import * as config from '$lib/config'
</script>

<svelte:head>
	<title>{config.title} | Contact</title>
</svelte:head>

<section class="px-8 sm:px-0 w-full main-section pt-32">
	<div class="p-4 bg-base-100 m-auto w-full sm:w-2/5 rounded-md">
		<div class="flex justify-between items-center mb-3 gap-4">
			<div class="flex justify-start flex-col gap-2">
				<label for="">First Name</label>
				<input type="text" placeholder="e.g. John" class="input input-bordered w-full max-w-xs" />
			</div>
			<div class="flex justify-start flex-col gap-2">
				<label for="">Last Name</label>
				<input type="text" placeholder="e.g. Doe" class="input input-bordered w-full max-w-xs" />
			</div>
		</div>
		<div class="flex justify-start flex-col gap-2 mb-3">
			<label for="">Email</label>
			<input type="text" placeholder="e.g. johndoe@email.com" class="input input-bordered w-full" />
		</div>
		<div class="mb-3 flex justify-start flex-col gap-2">
			<label for="">Subject</label>
			<select class="select select-bordered w-full">
				<option>I Want To Hire You</option>
				<option>Pre Built Apps</option>
				<option>Just Saying Hi!</option>
			</select>
		</div>
		<div class="mb-3 flex justify-start flex-col gap-2">
			<label for="">Your Message</label>
			<textarea class="textarea textarea-bordered" placeholder="How can I help?" />
		</div>
		<button class="btn btn-success w-full">Send</button>
	</div>
</section>

<style>
	section {
		height: 100vh;
	}

	label {
		padding-left: 1.1rem;
	}
</style>
