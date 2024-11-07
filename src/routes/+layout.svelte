<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import MenuBar from '$lib/components/ui/customs/nav-bar/index.svelte';

	let { children } = $props();
</script>

<ModeWatcher />
<MenuBar />
{@render children()}
