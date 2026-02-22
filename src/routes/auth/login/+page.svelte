<script lang="ts">
	import { login } from '$lib/api/auth.remote';
</script>

<div class="w-full max-w-md card preset-tonal-surface p-4 text-center">
	<form {...login} class="w-full max-w-md space-y-4 p-4">
		<fieldset class="space-y-4">
			<label class="label">
				<span class="label-text">Email</span>
				<input class="input" type="email" name="email" />
			</label>
			<label class="label">
				<span class="label-text">Password</span>
				<input class="input" type="password" name="password" />
			</label>
		</fieldset>
		<fieldset class="flex justify-end">
			<!-- Button -->
			<button type="submit" class="btn preset-outlined-surface-300-700">Login</button>
		</fieldset>
	</form>
</div>
