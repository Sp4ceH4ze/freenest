<script lang="ts">
	import { page } from '$app/state';
	import { getUser } from '$lib/api/auth.remote';
	import { getPostBySlug, editPost } from '$lib/api/posts.remote';
	import { redirect } from '@sveltejs/kit';

	const post = await getPostBySlug(page.params.slug!);
	const user = await getUser();

	if (!post) {
		throw redirect(302, '/admin');
	}
</script>

{#if post}
	<form {...editPost} class="w-full space-y-4">
		<h1 class="text-xl font-bold">Edit Post</h1>
		<fieldset class="space-y-4">
			<input {...editPost.fields.id.as('text')} value={post?.id} hidden />
			<label class="label max-w-sm">
				<span class="label-text">Title</span>
				<input {...editPost.fields.title.as('text')} class="input" value={post?.title} />
				{#each editPost.fields.title.issues() ?? [] as issue}
					<p class="issue">{issue.message}</p>
				{/each}
			</label>
			<label class="label">
				<span class="label-text">Content</span>
				<textarea
					{...editPost.fields.content.as('text')}
					class="textarea rounded-container"
					value={post?.content}
					rows="12"
				></textarea>
				{#each editPost.fields.content.issues() ?? [] as issue}
					<p class="issue">{issue.message}</p>
				{/each}
			</label>
		</fieldset>
		<fieldset class="flex justify-end space-x-4">
			<button type="submit" class="btn preset-outlined-success-300-700">Save</button>
		</fieldset>
	</form>
{/if}
