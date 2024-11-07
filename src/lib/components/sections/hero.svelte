<script>
	import { fly } from 'svelte/transition';
	import Button from '../ui/button/button.svelte';
	import Width from '../utils/width.svelte';
	import { onMount } from 'svelte';

	const transition = {
		y: 40,
		duration: 1000
	};

	let loaded = $state(false);

	onMount(() => {
		loaded = true;
	});
</script>

<Width>
	{#if loaded}
		<header class="grid min-h-screen content-center md:flex md:items-center md:justify-between">
			<div class="mb-8">
				<h1 class="mb-8 flex flex-col uppercase">
					<span in:fly={transition}>Hi 👋, I'm</span>
					<span in:fly={{ ...transition, delay: 100 }} class="text-4xl font-extrabold md:text-6xl"
						>Joakim<br />Edvardsen</span
					>
				</h1>
				<h2 in:fly={{ ...transition, delay: 200 }} class="mb-4 font-bold uppercase text-primary">
					Full stack software engineer
				</h2>
				<p in:fly={{ ...transition, delay: 300 }} class="mb-8">
					Computer engineer student at NTNU Trondheim, Norway.
				</p>
				<div class="flex gap-2">
					<div in:fly={{ ...transition, delay: 400 }}>
						<Button href="mailto:joakimedvardsen2000@gmail.com">Take contact</Button>
					</div>
					<div in:fly={{ ...transition, delay: 450 }}>
						<Button href="https://github.com/jKm00" target="_blank" variant="outline"
							>Check out GitHub</Button
						>
					</div>
				</div>
			</div>
			<img
				in:fly={{ ...transition, duration: 1500 }}
				src="/img/profile_pictures/profile_pic_circles.png"
				alt="Joakim Edvardsen"
				class="w-[150px] md:w-[200px] lg:w-[300px]"
			/>
		</header>
	{/if}
</Width>
