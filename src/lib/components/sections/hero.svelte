<script lang="ts">
	import { fly } from 'svelte/transition';
	import Button from '../ui/button/button.svelte';
	import Width from '../utils/width.svelte';
	import { onMount } from 'svelte';
	import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-svelte';
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

<header class="relative overflow-hidden">
	<Width
		class="relative z-10 grid min-h-screen content-center md:flex md:items-center md:justify-between"
	>
		{#if loaded}
			<div class="relative mb-8 max-w-2xl">
				<!-- Greeting -->
				<div in:fly={transition} class="mb-4">
					<span
						class="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
					>
						👋 Welcome to my portfolio
					</span>
				</div>

				<!-- Main Heading -->
				<h1 class="group mb-6 flex flex-col" aria-label="Hi, I'm Joakim Edvardsen">
					<span
						in:fly={{ ...transition, delay: 200 }}
						class="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-5xl font-bold text-transparent sw-mode:from-purple-400 sw-mode:via-primary sw-mode:to-purple-400 md:text-7xl lg:text-8xl"
					>
						Joakim
					</span>
					<span
						in:fly={{ ...transition, delay: 300 }}
						class="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-5xl font-bold text-transparent sw-mode:from-purple-400 sw-mode:via-primary sw-mode:to-purple-400 md:text-7xl lg:text-8xl"
					>
						Edvardsen
					</span>
				</h1>

				<!-- <StarWarsModeToggle
					class="absolute right-60 top-44 transition-transform group-hover:-translate-y-4 max-md:hidden"
				/> -->

				<!-- Subtitle -->
				<h2
					in:fly={{ ...transition, delay: 400 }}
					class="mb-6 text-xl font-semibold text-primary md:text-2xl"
				>
					Full Stack Software Engineer
				</h2>

				<!-- Description -->
				<p
					in:fly={{ ...transition, delay: 500 }}
					class="mb-8 text-lg leading-relaxed text-muted-foreground"
				>
					Master's graduate from NTNU with a passion for building impactful software solutions.
				</p>

				<!-- Call to Action Buttons -->
				<div class="mb-8 flex flex-wrap gap-2">
					<div in:fly={{ ...transition, delay: 600 }}>
						<Button href="mailto:joakimedvardsen2000@gmail.com" size="lg" class="gap-2">
							<Mail class="h-4 w-4" />
							Get In Touch
						</Button>
					</div>
					<div in:fly={{ ...transition, delay: 650 }}>
						<Button
							href="https://github.com/jKm00"
							target="_blank"
							variant="outline"
							size="lg"
							class="aspect-square p-3"
						>
							<Github class="size-4" />
						</Button>
					</div>
					<div in:fly={{ ...transition, delay: 700 }}>
						<Button
							href="https://www.linkedin.com/in/joakim-edvardsen-665043220/"
							target="_blank"
							variant="outline"
							size="lg"
							class="aspect-square p-3"
						>
							<Linkedin class="size-4" />
						</Button>
					</div>
				</div>
			</div>

			<!-- Profile Image -->
			<div class="relative">
				<div in:fly={{ ...transition, duration: 1500, delay: 400 }} class="relative">
					<!-- Glow effect behind image -->
					<div
						class="absolute inset-0 scale-110 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 blur-2xl"
					></div>

					<img
						src="/img/profile_pictures/profile_pic_circles_compressed.webp"
						alt="Joakim Edvardsen"
						class="relative z-10 w-[200px] drop-shadow-2xl md:w-[250px] lg:w-[350px]"
					/>
				</div>
			</div>
		{/if}
	</Width>

	<!-- Scroll Indicator -->
	{#if loaded}
		<div
			in:fly={{ y: 20, duration: 1000, delay: 1000 }}
			class="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground"
		>
			<span class="text-sm">Scroll to explore</span>
			<ArrowDown class="h-4 w-4 animate-bounce" />
		</div>
	{/if}
</header>
