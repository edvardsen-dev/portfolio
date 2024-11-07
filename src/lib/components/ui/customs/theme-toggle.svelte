<script lang="ts">
	import { Moon } from 'lucide-svelte';
	import Sun from 'lucide-svelte/icons/sun';
	import { mode, toggleMode } from 'mode-watcher';

	let checked = $derived($mode === 'dark');
	let Icon = $derived($mode === 'dark' ? Moon : Sun);
</script>

<button
	onclick={toggleMode}
	class="relative h-6 w-12 rounded-full bg-neutral-300 dark:bg-neutral-700"
>
	<div
		class="absolute left-1 top-0 flex h-full items-center transition-transform {checked &&
			'translate-x-5'}"
	>
		<Icon class="size-5" />
	</div>
</button>
