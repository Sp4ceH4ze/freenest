<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';

	import AppBar from './AppBar.svelte';

	onMount(() => {
		if (typeof window !== 'undefined') {
			document.documentElement.setAttribute('data-theme', 'nouveau');
		}
	});

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="grid h-screen grid-rows-[auto_1fr_auto] justify-items-center">
	<AppBar />
	<div class="center m-8 w-full max-w-4xl justify-items-center">
		{@render children()}
	</div>
</div>
