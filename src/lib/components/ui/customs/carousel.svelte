<script lang="ts">
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import Progress from '../progress/progress.svelte';
	import { Button } from '../button';

	let { images }: { images: { src: string; alt: string }[] } = $props();

	let current = $state(1);
	let animating = $state(false);
	let progress = $state(0);
	let paused = $state(false);

	onMount(() => {
		const interval = setInterval(() => {
			if (paused) return;
			if (progress >= 500) {
				goNext();
				progress = 0;
			} else {
				progress++;
			}
		}, 10);
		return () => clearInterval(interval);
	});

	async function goNext() {
		animating = true;
		current++;

		setTimeout(() => {
			animating = false;

			if (current > images.length) {
				current = 1;
			}
		}, 200);
	}

	function goPrev() {
		animating = true;
		current--;

		setTimeout(() => {
			animating = false;

			if (current === 0) {
				current = images.length;
			}
		}, 200);
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div onmouseenter={() => (paused = true)} onmouseleave={() => (paused = false)}>
	<div class="flex overflow-hidden">
		<img
			src={images[images.length - 1].src}
			alt={images[images.length - 1].alt}
			class="aspect-video w-full bg-muted object-contain {animating ? 'transition-transform' : ''}"
			style="transform: translateX(-{current * 100}%)"
		/>
		{#each images as image (image.src)}
			<img
				src={image.src}
				alt={image.alt}
				class="aspect-video w-full bg-muted object-contain {animating
					? 'transition-transform'
					: ''}"
				style="transform: translateX(-{current * 100}%)"
			/>
		{/each}
		<img
			src={images[0].src}
			alt={images[0].alt}
			class="aspect-video w-full bg-muted object-contain {animating ? 'transition-transform' : ''}"
			style="transform: translateX(-{current * 100}%)"
		/>
	</div>
	<Progress value={progress / 5} max={100} class="mb-2" />
	<div class="flex items-center justify-center gap-4">
		<Button onclick={goPrev} disabled={animating} variant="ghost" class="aspect-square p-1">
			<ChevronLeft />
		</Button>
		<ul class="flex gap-1">
			{#each Array.from({ length: images.length }) as _, index}
				<li>
					<button
						onclick={() => (current = index + 1)}
						class="size-4 rounded-full bg-muted p-0.5 hover:bg-accent"
						aria-label="Skip to image {index + 1}"
					>
						{#if current - 1 === index}
							<span class="block h-full w-full rounded-full bg-primary"></span>
						{/if}
					</button>
				</li>
			{/each}
		</ul>
		<Button onclick={goNext} disabled={animating} variant="ghost" class="aspect-square p-1">
			<ChevronRight />
		</Button>
	</div>
</div>
