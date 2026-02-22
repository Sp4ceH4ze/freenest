<script lang="ts">
	import { getUser } from '$lib/api/auth.remote';

	const user = await getUser();
</script>

<div class="justify-items-center">
	<h1 class="text-2xl font-bold">Admin Dashboard</h1>
	<p class="text-gray-600">Welcome, {user?.name}!</p>
</div>

<form class="w-full space-y-4 p-4">
	<h1 class="text-xl font-bold">Create a new Post</h1>
	<fieldset class="space-y-4">
		<!-- Input -->
		<label class="label max-w-sm">
			<span class="label-text">Title</span>
			<input class="input" type="text" placeholder="Input" name="title" />
		</label>
		<label class="label max-w-sm">
			<span class="label-text">Slug</span>
			<input class="input" type="text" placeholder="Input" name="slug" />
		</label>
		<!-- Textarea -->
		<label class="label">
			<span class="label-text">Content</span>
			<textarea class="textarea rounded-container" rows="12"></textarea>
		</label>
	</fieldset>
	<fieldset class="flex justify-end space-x-4">
		<!-- Button -->
		<button type="button" class="btn preset-outlined-success-300-700">Save</button>
		<button type="button" class="btn preset-outlined-success-300-700">Save & Publish</button>
		<button type="button" class="btn preset-outlined-error-300-700">Cancel</button>
	</fieldset>
</form>
