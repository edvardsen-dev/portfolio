<script lang="ts">
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import Progress from '../progress/progress.svelte';
	import { Button } from '../button';
	import type { Project } from '$lib/features/projects/types';
	import { PUBLIC_CMS_BASE_PATH } from '$env/static/public';

	let { project }: { project: Project } = $props();

	const images = project.images.map((image) => ({
		src: `${PUBLIC_CMS_BASE_PATH}/api/files/${project.collectionId}/${project.id}/${image}`,
		alt: image
	}));

	let current = $state(0);
	let prev = $derived((current + images.length - 1) % images.length);
	let next = $derived((current + 1) % images.length);

	let animating = $state(false);
	let direction = $state<'l' | 'r'>('l');

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
		direction = 'r';
		setTimeout(() => {
			animating = false;
			current = (current + 1) % images.length;
		}, 200);
	}

	function goPrev() {
		animating = true;
		direction = 'l';
		setTimeout(() => {
			animating = false;
			current = (current + images.length - 1) % images.length;
		}, 200);
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div onmouseenter={() => (paused = true)} onmouseleave={() => (paused = false)}>
	<div class="flex overflow-hidden">
		<img
			src={images[prev].src}
			alt={images[prev].alt}
			class="aspect-video w-full bg-muted object-contain {animating
				? direction === 'r'
					? '-translate-x-[200%] transition-transform'
					: '-translate-x-0 transition-transform'
				: '-translate-x-full'}"
		/>
		<img
			src={images[current].src}
			alt={images[current].alt}
			class="aspect-video w-full bg-muted object-contain {animating
				? direction === 'r'
					? '-translate-x-[200%] transition-transform'
					: '-translate-x-0 transition-transform'
				: '-translate-x-full'}"
		/>
		<img
			src={images[next].src}
			alt={images[next].alt}
			class="aspect-video w-full bg-muted object-contain {animating
				? direction === 'r'
					? '-translate-x-[200%] transition-transform'
					: '-translate-x-0 transition-transform'
				: '-translate-x-full'}"
		/>
	</div>
	<Progress value={progress / 5} max={100} class="mb-4" />
	<div class="flex items-center justify-center gap-4">
		<Button onclick={goPrev} disabled={animating} variant="ghost" class="aspect-square p-1">
			<ChevronLeft />
		</Button>
		<ul class="flex gap-1">
			{#each Array.from({ length: images.length }) as _, index}
				<li>
					<button
						onclick={() => (current = index)}
						class="size-4 rounded-full bg-muted p-0.5 hover:bg-accent"
						aria-label="Skip to image {index + 1}"
					>
						{#if current === index}
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
