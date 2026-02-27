<script lang="ts">
	import { getUser } from '$lib/api/auth.remote';
	import Button from '$lib/components/Button.svelte';

	const user = await getUser();
</script>

<div class="space-y-4">
	<div class="justify-items-center">
		<h2 class="h2">Administrator Dashboard</h2>
		<p class="text-gray-500">Welcome, {user.name}</p>
	</div>
	<div class="flex justify-center gap-4">
		<Button btnLink="/admin/create" btnAria="Go to create a new Post page." btnText="New Post" />
		<Button btnLink="/admin/create" btnAria="Go to Users dashboard." btnText="Users" />
		<Button btnLink="/admin/create" btnAria="Go to Posts dashboard." btnText="Posts" />
	</div>
</div>
