<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import NavBar from '$lib/components/layout/nav-bar/index.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';
	import { setSwMode } from '$lib/context/sw-mode-context.svelte';

	let { data, children } = $props();

	setSwMode(data.swMode ?? false);

	onMount(() => {
		if (!dev) {
			console.clear();
			console.log(
				'%c Understand this code, you do. Debug you must, young Padawan - Master Yoda',
				'color: #75934E'
			);
		}
	});
</script>

<svelte:head>
	<title>Joakim Edvardsen</title>
	<link rel="icon" type="image/x-icon" href="/favicons/favicon.ico" />
</svelte:head>

<ModeWatcher />
<NavBar />
<div class="mb-[100vh] bg-background shadow">
	{@render children()}
</div>
<Footer />
