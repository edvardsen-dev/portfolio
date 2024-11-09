<script lang="ts">
	import { Moon } from 'lucide-svelte';
	import Sun from 'lucide-svelte/icons/sun';
	import { mode, setMode, toggleMode } from 'mode-watcher';
	import StarWarsToggle from './star-wars-toggle.svelte';

	let checked = $state($mode === 'dark');

	$effect(() => {
		checked ? setMode('dark') : setMode('light');
	});

	$effect(() => {
		$mode === 'dark' ? (checked = true) : (checked = false);
	});
</script>

<StarWarsToggle bind:checked />
