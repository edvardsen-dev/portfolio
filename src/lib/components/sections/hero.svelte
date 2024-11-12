<script lang="ts">
	import { fly } from 'svelte/transition';
	import Button from '../ui/button/button.svelte';
	import Width from '../utils/width.svelte';
	import { onMount } from 'svelte';
	import { Github, Linkedin, Mail } from 'lucide-svelte';
	import StarWarsModeToggle from '../ui/customs/star-wars-mode-toggle.svelte';

	const transition = {
		y: 40,
		duration: 1000
	};

	let loaded = $state(false);

	onMount(() => {
		loaded = true;
	});
</script>

<header class="relative">
	<Width class="grid min-h-screen content-center md:flex md:items-center md:justify-between">
		{#if loaded}
			<div class="mb-8">
				<h1 class="group mb-8 flex flex-col uppercase" aria-label="Hi, I'm Joakim Edvardsen">
					<span in:fly={transition}>Hi 👋, I'm</span>
					<span
						in:fly={{ ...transition, delay: 100 }}
						class="text-4xl font-extrabold sw-mode:text-purple-400 md:text-6xl"
					>
						Joakim
						<br />
						<div class="relative">
							<span class="pointer-events-none relative z-20">Edvardsen</span>
							<div class="absolute top-3 z-10 h-full w-full bg-background"></div>
							<StarWarsModeToggle
								class="absolute -top-4 right-16 transition-transform group-hover:-translate-y-4 max-md:hidden"
							/>
						</div>
					</span>
				</h1>
				<h2 in:fly={{ ...transition, delay: 200 }} class="mb-4 font-bold uppercase text-primary">
					Full stack software engineer
				</h2>
				<p in:fly={{ ...transition, delay: 300 }} class="mb-8">
					Computer engineer student at NTNU Trondheim, Norway.
				</p>
				<div class="flex gap-2">
					<div in:fly={{ ...transition, delay: 400 }}>
						<Button href="mailto:joakimedvardsen2000@gmail.com"><Mail />Take contact</Button>
					</div>
					<div in:fly={{ ...transition, delay: 450 }}>
						<Button
							href="https://github.com/jKm00"
							target="_blank"
							variant="outline"
							class="aspect-square p-2"
						>
							<Github />
						</Button>
					</div>
					<div in:fly={{ ...transition, delay: 500 }}>
						<Button
							href="https://www.linkedin.com/in/joakim-edvardsen-665043220/"
							target="_blank"
							variant="outline"
							class="aspect-square p-2"
						>
							<Linkedin />
						</Button>
					</div>
				</div>
			</div>

			<img
				in:fly={{ ...transition, duration: 1500 }}
				src="/img/profile_pictures/profile_pic_circles.png"
				alt="Joakim Edvardsen"
				class="pointer-events-none relative z-10 w-[150px] md:w-[200px] lg:w-[300px]"
			/>
		{/if}
	</Width>
</header>
