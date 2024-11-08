<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import NavBar from '$lib/components/layout/nav-bar/index.svelte';
	import Footer from '$lib/components/layout/footer.svelte';

	let { children } = $props();
</script>

<ModeWatcher />
<NavBar />
<div class="mb-[100vh] bg-background pb-64 shadow">
	{@render children()}
</div>
<Footer />
