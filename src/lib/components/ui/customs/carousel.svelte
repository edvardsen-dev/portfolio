<script lang="ts">
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import Progress from '../progress/progress.svelte';
	import { tweened } from 'svelte/motion';
	import { linear } from 'svelte/easing';

	const images = [
		{ src: '/img/projects/tf2dle/home_screen.png', alt: 'Home screen' },
		{ src: '/img/projects/tf2dle/weapon-game-mode.PNG', alt: 'Weapon game mode' },
		{ src: '/img/projects/tf2dle/color-blind.PNG', alt: 'Color blind mode' },
		{ src: '/img/projects/tf2dle/weapon-2.PNG', alt: 'Weapon 2 game mode' },
		{ src: '/img/projects/tf2dle/weapon-2-complete.PNG', alt: 'Weapon 2 game mode completed' },
		{ src: '/img/projects/tf2dle/map-game-mode.PNG', alt: 'Map game mode' },
		{ src: '/img/projects/tf2dle/cosmetic-game-mode.PNG', alt: 'Cosmetic game mode' },
		{ src: '/img/projects/tf2dle/unusual-game-mode.PNG', alt: 'Unusual game mode' }
	];

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
			class={animating
				? direction === 'r'
					? '-translate-x-[200%] transition-transform'
					: '-translate-x-0 transition-transform'
				: '-translate-x-full'}
		/>
		<img
			src={images[current].src}
			alt={images[current].alt}
			class={animating
				? direction === 'r'
					? '-translate-x-[200%] transition-transform'
					: '-translate-x-0 transition-transform'
				: '-translate-x-full'}
		/>
		<img
			src={images[next].src}
			alt={images[next].alt}
			class={animating
				? direction === 'r'
					? '-translate-x-[200%] transition-transform'
					: '-translate-x-0 transition-transform'
				: '-translate-x-full'}
		/>
	</div>
	<Progress value={progress / 5} max={100} class="mb-4" />
	<div class="flex justify-center gap-4">
		<button onclick={goPrev} disabled={animating}><ChevronLeft /></button>
		<ul class="flex gap-1">
			{#each Array.from({ length: images.length }) as _, index}
				<li>
					<button
						onclick={() => (current = index)}
						class="size-4 rounded-full bg-muted p-0.5"
						aria-label="Skip to image {index + 1}"
					>
						{#if current === index}
							<span class="block h-full w-full rounded-full bg-primary"></span>
						{/if}
					</button>
				</li>
			{/each}
		</ul>
		<button onclick={goNext} disabled={animating}><ChevronRight /></button>
	</div>
</div>
