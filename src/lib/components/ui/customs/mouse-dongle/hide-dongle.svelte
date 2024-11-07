<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="relative z-20 bg-background">
	{@render children()}
</div>
