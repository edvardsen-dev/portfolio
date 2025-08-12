<script lang="ts">
	import { fly } from 'svelte/transition';
	import Width from '../../utils/width.svelte';
	import { useTransitionIn } from '$lib/composables/useTransitionIn.svelte';

	type Tool = {
		name: string;
		file: string;
		options: { invert?: boolean };
	};

	// All technologies for the carousel
	const tools: Tool[] = [
		{
			name: 'TypeScript',
			file: 'typescript.png',
			options: {}
		},
		{
			name: 'SvelteKit',
			file: 'svelte.png',
			options: {}
		},
		{
			name: 'Tailwind',
			file: 'tailwind.png',
			options: {}
		},
		{
			name: 'Drizzle',
			file: 'drizzle.png',
			options: {}
		},
		{
			name: 'Playwright',
			file: 'playwright.svg',
			options: {}
		},
		{
			name: 'Java',
			file: 'java.png',
			options: {}
		},
		{
			name: 'Spring Boot',
			file: 'spring-boot.png',
			options: {}
		},
		{
			name: 'PostgreSQL',
			file: 'postgresql.png',
			options: {}
		},
		{
			name: 'Git',
			file: 'git.png',
			options: {}
		},
		{
			name: 'GitHub Actions',
			file: 'github-actions.png',
			options: {}
		},
		{
			name: 'Docker',
			file: 'docker.webp',
			options: {}
		},
		{
			name: 'Nginx',
			file: 'nginx.png',
			options: {}
		},
		{
			name: 'DigitalOcean',
			file: 'digitalocean.png',
			options: {}
		},
		{
			name: 'Ansible',
			file: 'ansible.png',
			options: { invert: true }
		},
		{
			name: 'Figma',
			file: 'figma.png',
			options: {}
		}
	] as const;

	// Duplicate the tools array for seamless infinite scroll
	const duplicatedTools = [...tools, ...tools];

	let section = $state<HTMLElement | null>(null);
	let transition = useTransitionIn(() => section);
</script>

<div class="bg-muted/80">
	<section bind:this={section} class="py-12 md:py-20">
		<!-- Header -->
		<div class="mb-8 text-center md:mb-12">
			<h2 class="mb-3 text-2xl font-bold text-foreground">Technologies I Work With</h2>
			<p class="text-sm text-muted-foreground">
				Modern tools and frameworks I use to build great software
			</p>
		</div>

		<!-- Infinite Scrolling Carousel -->
		{#if transition.show}
			<div class="relative overflow-hidden">
				<!-- Right fade -->
				<div
					class="to-99% from-1% pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-muted/80 via-transparent to-muted/80"
				></div>

				<div class="scroll-animation flex w-max gap-6 py-8">
					{#each duplicatedTools as tool, index}
						{@render techCard(tool, index)}
					{/each}
				</div>
			</div>
		{/if}
	</section>
</div>

{#snippet techCard(tool: Tool, index: number)}
	<div
		class="group flex items-center gap-2 rounded-lg px-4 transition-transform duration-300 hover:scale-105"
	>
		<img
			src={`/img/logos/${tool.file}`}
			alt={tool.name}
			class="size-6 object-contain transition-transform duration-300 group-hover:scale-110 {tool
				.options.invert && 'dark:invert'}"
		/>
		<span class="text-sm text-foreground transition-colors duration-300 group-hover:text-primary">
			{tool.name}
		</span>
	</div>
{/snippet}

<style>
	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	.scroll-animation {
		animation: scroll 30s linear infinite;
	}

	.scroll-animation:hover {
		animation-play-state: paused;
	}
</style>
