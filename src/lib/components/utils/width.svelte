<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		class?: string;
	}

	let { children, class: clazz }: Props = $props();
</script>

<div class="relative m-auto {clazz}" style="width: min(1200px, 90%)">
	{@render children()}
</div>
