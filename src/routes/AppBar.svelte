<script lang="ts">
	import { CircleUserIcon, SearchIcon } from '@lucide/svelte';
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import Menu from './Menu.svelte';
</script>

<AppBar>
	<AppBar.Toolbar class="grid-cols-[auto_1fr_auto]">
		<AppBar.Lead>
			<Menu />
		</AppBar.Lead>
		<AppBar.Headline>
			<p class="text-2xl font-bold">FreeNest</p>
		</AppBar.Headline>
		<AppBar.Trail>
			<button type="button" class="btn-icon hover:preset-tonal"
				><SearchIcon class="size-6" /></button
			>
			<button type="button" class="btn-icon hover:preset-tonal"
				><CircleUserIcon class="size-6" /></button
			>
		</AppBar.Trail>
	</AppBar.Toolbar>
</AppBar>
