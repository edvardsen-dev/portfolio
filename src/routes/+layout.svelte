<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import NavBar from '$lib/components/layout/nav-bar/index.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';

	let { children } = $props();

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

<ModeWatcher />
<NavBar />
<div class="mb-[100vh] bg-background pb-64 shadow">
	{@render children()}
</div>
<Footer />
