<script lang="ts">
	import { onMount } from 'svelte';

	const maxParticles = 50;

	let scrollY = $state(0);
	let trailParticles = $state<{ x: number; y: number }[]>([]);

	onMount(() => {
		const interval = setInterval(() => {
			if (trailParticles.length < 5) return;
			trailParticles = trailParticles.slice(0, -1);
		}, 8);

		return () => clearInterval(interval);
	});

	function handleMouseMove(event: MouseEvent) {
		trailParticles = [{ x: event.clientX, y: event.clientY + scrollY }, ...trailParticles].slice(
			0,
			maxParticles
		);
	}
</script>

<svelte:window onmousemove={handleMouseMove} bind:scrollY />

<div class="absolute inset-0 overflow-hidden">
	{#each trailParticles as { x, y }, i}
		<div
			class="pointer-events-none absolute grid size-2 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full transition-colors"
			style="left: {x}px; top: {y}px; opacity: {1 -
				i / maxParticles};box-shadow: 0 0 15px 5px #4ade80;"
		>
			<div class="size-1 rounded-full bg-white" style="box-shadow: 0 0 3px 3px #fff"></div>
		</div>
	{/each}
</div>
