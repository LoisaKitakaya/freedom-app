<script lang="ts">
	import { Card, Label, Input, Textarea, Button, Spinner } from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let email_ = '';
	let subject_ = '';
	let comment_ = '';

	let isLoading = false;
	let notification_ = '';

	let textareaProps = {
		id: 'message',
		name: 'message',
		label: 'Your message',
		rows: 4,
		placeholder: 'Leave a comment...'
	};

	const sendMail = async () => {
		isLoading = true;

		const url = '/api/contact';

		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: data.password },
			body: JSON.stringify({
				from: email_,
				subject: subject_,
				text: comment_
			})
		};

		try {
			const response = await fetch(url, options);

			const res = await response.json();

			notification_ = res?.message;

			email_ = '';
			subject_ = '';
			comment_ = '';
		} catch (err) {
			alert('Something went wrong: ' + err);

			throw new Error('Something went wrong: ' + err);
		}

		isLoading = false;

		alert(notification_);
	};
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<section class="min-h-screen w-full p-4 text-gray-900 dark:text-white">
	<div class="mx-auto mb:mt-12 mt-8 w-fit">
		<h1 class="mb-8 text-center text-xl font-semibold">Let's Connect!</h1>

		<Card class="w-80 bg-gray-50 md:w-96">
			<form>
				<div class="mb-4">
					<Label class="mb-2 block">Your email</Label>
					<Input
						class="bg-white"
						type="email"
						label="Email"
						id="email"
						name="email"
						required
						placeholder="e.g. name@flowbite.com"
						bind:value={email_}
					/>
				</div>

				<div class="mb-4">
					<Label class="mb-2 block">Subject</Label>
					<Input
						class="bg-white"
						type="text"
						label="Subject"
						id="subject"
						name="subject"
						required
						placeholder="e.g. Project Hire"
						bind:value={subject_}
					/>
				</div>

				<div class="mb-4">
					<Label class="mb-2 block">Your message</Label>
					<Textarea class="bg-white dark:bg-gray-600" {...textareaProps} bind:value={comment_} />
				</div>

				<div class="w-full">
					<Button on:click={sendMail} class="w-full">
						{#if isLoading}
							<Spinner class="me-3" size="4" color="white" />
							Submitting...
						{:else}
							Submit
						{/if}
					</Button>
				</div>
			</form>
		</Card>
	</div>
</section>
