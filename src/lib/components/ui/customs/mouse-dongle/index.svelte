<script lang="ts">
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	const offset = { x: -28, y: 10 };

	let showDongle = $state(false);
	let viewportWidth = $state(0);

	let isMobile = $derived(viewportWidth < 768);

	$effect(() => {
		if (isMobile) showDongle = false;
	});

	let donglePosition = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.05,
			damping: 0.7
		}
	);

	function handleMouseMove(e: MouseEvent) {
		if (isMobile) return;

		if (!showDongle) showDongle = true;
		donglePosition.set({ x: e.clientX + offset.x, y: e.clientY + offset.y });
	}
</script>

<svelte:window onmousemove={handleMouseMove} bind:innerWidth={viewportWidth} />

{#if showDongle}
	<img
		src="/img/baby-yoda.png"
		alt="Baby yoda"
		class="pointer-events-none fixed h-14 w-14"
		style="top: {$donglePosition.y}px; left: {$donglePosition.x}px;"
	/>
{/if}
