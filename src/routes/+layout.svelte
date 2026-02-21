<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';

	import AppBar from './AppBar.svelte';

	onMount(() => {
		if (typeof window !== 'undefined') {
			document.body.setAttribute('data-theme', 'nouveau');
		}
	});

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="grid h-screen grid-rows-[auto_1fr_auto] justify-items-center">
	<AppBar />
	{@render children()}
</div>
