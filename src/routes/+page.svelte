<script lang="ts">
	import { getAllPosts } from '$lib/api/posts.remote';

	const posts = await getAllPosts();
	const imgSrc =
		'https://images.unsplash.com/photo-1463171515643-952cee54d42a?q=80&w=450&h=190&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
</script>

<div class="container grid grid-cols-1 gap-8 py-8">
	<h2 class="h2">Latest blog posts</h2>
	{#each posts as post}
		<a
			href="/{post.slug}"
			class="max-w-l block divide-y divide-surface-200-800 overflow-hidden card border border-surface-200-800 preset-filled-surface-100-900 card-hover"
		>
			<header>
				<img src={imgSrc} class="aspect-21/9 w-full grayscale hue-rotate-90" alt="banner" />
			</header>

			<article class="space-y-4 p-4">
				<div>
					<h6 class="h6">Article</h6>
					<h3 class="h3" style:view-transition-name={`heading-${post?.slug}`}>{post.title}</h3>
				</div>
				<p class="opacity-60">
					{post.content}
				</p>
			</article>

			<footer class="flex items-center justify-between gap-4 p-4">
				<small class="opacity-60">{post.authorId}</small>
				<small class="opacity-60">On {post.publishedAt}</small>
			</footer>
		</a>
	{/each}
</div>
