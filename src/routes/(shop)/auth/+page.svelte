<script>
	import SignIn from '$lib/components/shop/auth/SignIn.svelte'
	import SignUp from '$lib/components/shop/auth/SignUp.svelte'

	let activeTab = 'sign-in-tab'

	const showSignInTab = () => {
		activeTab = 'sign-in-tab'
	}

	const showSignUpTab = () => {
		activeTab = 'sign-up-tab'
	}
</script>

<div class="tabs">
	<button
		class="tab tab-bordered {activeTab === 'sign-in-tab' ? 'tab-active' : ''}"
		id="sign-in-tab"
		on:click={showSignInTab}>Sign In</button
	>
	<button
		class="tab tab-bordered {activeTab === 'sign-up-tab' ? 'tab-active' : ''}"
		id="sign-up-tab"
		on:click={showSignUpTab}>Sign Up</button
	>
</div>

<div class="tab-content">
	{#if activeTab === 'sign-in-tab'}
		<div id="sign-in">
			<SignIn />
		</div>
	{:else if activeTab === 'sign-up-tab'}
		<div id="sign-up">
			<SignUp />
		</div>
	{/if}
</div>

<br />
<br />

<style>
	.tabs {
		width: fit-content;
		margin: 1rem auto;
	}

	.tab-content {
		width: fit-content;
		margin: auto;
	}
</style>
