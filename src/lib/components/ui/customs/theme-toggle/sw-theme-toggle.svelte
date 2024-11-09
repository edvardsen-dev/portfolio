<script lang="ts">
	import { mode, setMode } from 'mode-watcher';
	import StarWarsSwitch from '../star-wars-switch.svelte';

	let checked = $state($mode === 'dark');

	$effect(() => {
		checked ? setMode('dark') : setMode('light');
	});

	$effect(() => {
		$mode === 'dark' ? (checked = true) : (checked = false);
	});
</script>

<StarWarsSwitch bind:checked />
