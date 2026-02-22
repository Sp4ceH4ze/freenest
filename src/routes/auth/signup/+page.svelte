<script lang="ts">
	import { signup } from '$lib/api/auth.remote';
</script>

<div class="w-full max-w-md card preset-tonal-surface p-4 text-center">
	<form {...signup} class="w-full max-w-md space-y-4 p-4">
		<fieldset class="space-y-4">
			<label class="label">
				<span class="label-text">Username</span>
				<input class="input" type="text" name="name" />
			</label>
			<label class="label">
				<span class="label-text">Email</span>
				<input class="input" type="email" name="email" />
			</label>
			<label class="label">
				<span class="label-text">Password</span>
				<input class="input" type="password" name="password" />
			</label>
			<label class="label">
				<span class="label-text">Confirm Password</span>
				<input class="input" type="password" name="confirmPassword" />
			</label>
		</fieldset>
		<fieldset class="flex justify-end">
			<!-- Button -->
			<button type="submit" class="btn preset-outlined-surface-300-700">Sign Up</button>
		</fieldset>
	</form>
</div>
