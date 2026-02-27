<script lang="ts">
	import { page } from '$app/state';
	import { getPostBySlug } from '$lib/api/posts.remote';

	const post = await getPostBySlug(page.params.slug!);
</script>

<div class="space-y-4">
	<h3 class="h3 font-bold" style:view-transition-name={`heading-${post?.slug}`}>
		{post?.title}
	</h3>
	<p>
		{post?.content}
	</p>
</div>
