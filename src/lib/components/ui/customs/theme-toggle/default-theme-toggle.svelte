<script lang="ts">
	import { mode, toggleMode } from 'mode-watcher';
</script>

<button
	onclick={() => toggleMode()}
	class="h-4 w-10 rounded-full bg-neutral-300 p-0.5 transition-colors focus:outline-none dark:bg-primary"
	aria-label="Toggle theme"
>
	<div
		class="aspect-square h-full rounded-full bg-neutral-50 transition-transform {$mode === 'dark' &&
			'translate-x-6'}"
	></div>
</button>
