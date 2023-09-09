<form action="?/signIn" method="POST" class="p-4">
	<div class="mb-3 form-component">
		<label for="" style="margin-left: 1.175rem; margin-bottom: 0.25rem">Email</label>
		<input
			type="email"
			name="email"
			placeholder="Type here"
			class="input input-bordered w-full max-w-xs"
		/>
	</div>
	<div class="mb-3 form-component">
		<label for="" style="margin-left: 1.175rem; margin-bottom: 0.25rem">Password</label>
		<input
			type="password"
			name="password"
			placeholder="Type here"
			class="input input-bordered w-full max-w-xs"
		/>
	</div>
	<button class="btn btn-success w-full max-w-xs">Sign Up</button>
</form>

<style>
	.form-component {
		display: flex;
		flex-direction: column;
	}
</style>
