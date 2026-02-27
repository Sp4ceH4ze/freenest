<script lang="ts">
	import { createPost } from '$lib/api/posts.remote';
</script>

<form {...createPost} class="w-full space-y-4">
	<h1 class="text-xl font-bold">Create a new Post</h1>
	<fieldset class="space-y-4">
		<!-- Input -->
		<label class="label max-w-sm">
			<span class="label-text">Title</span>
			<input {...createPost.fields.title.as('text')} class="input" />
			{#each createPost.fields.title.issues() ?? [] as issue}
				<p class="issue">{issue.message}</p>
			{/each}
		</label>
		<!-- <label class="label max-w-sm">
			<span class="label-text">Slug</span>
			<input {...createPost.fields.slug.as('text')} class="input" />
			{#each createPost.fields.slug.issues() ?? [] as issue}
				<p class="issue">{issue.message}</p>
			{/each}
		</label> -->
		<!-- Textarea -->
		<label class="label">
			<span class="label-text">Content</span>
			<textarea
				{...createPost.fields.content.as('text')}
				class="textarea rounded-container"
				rows="12"
			></textarea>
			{#each createPost.fields.content.issues() ?? [] as issue}
				<p class="issue">{issue.message}</p>
			{/each}
		</label>
	</fieldset>
	<fieldset class="flex justify-end space-x-4">
		<!-- Button -->
		<button type="submit" class="btn preset-outlined-success-300-700">Save</button>
		<!-- <button type="button" class="btn preset-outlined-success-300-700">Save & Publish</button>
		<button type="button" class="btn preset-outlined-error-300-700">Cancel</button> -->
	</fieldset>
</form>
