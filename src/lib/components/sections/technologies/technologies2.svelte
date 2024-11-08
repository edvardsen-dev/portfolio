<script lang="ts">
	import { fly } from 'svelte/transition';
	import Width from '../../utils/width.svelte';
	import { useTransitionIn } from '$lib/composables/useTransitionIn.svelte';

	type Tool = {
		name: string;
		file: string;
		options: { bg: string; invert?: boolean };
	};

	const tools: Tool[] = [
		{
			name: 'TypeScript',
			file: 'typescript.png',
			options: { bg: 'bg-blue-400/20' }
		},
		{
			name: 'SvelteKit',
			file: 'svelte.png',
			options: { bg: 'bg-orange-400/20' }
		},
		{
			name: 'Tailwind',
			file: 'tailwind.png',
			options: { bg: 'bg-blue-400/20' }
		},
		{
			name: 'Drizzle',
			file: 'drizzle.png',
			options: { bg: 'bg-neutral-600/20' }
		},
		{
			name: 'Playwright',
			file: 'playwright.svg',
			options: { bg: 'bg-green-600/20' }
		},
		{ name: 'Java', file: 'java.png', options: { bg: 'bg-blue-400/20' } },
		{
			name: 'Spring Boot',
			file: 'spring-boot.png',
			options: { bg: 'bg-green-400/20' }
		},
		{
			name: 'PostgreSQL',
			file: 'postgresql.png',
			options: { bg: 'bg-blue-400/20' }
		},
		{
			name: 'Git',
			file: 'git.png',
			options: { bg: 'bg-orange-600/20' }
		},
		{
			name: 'GitHub Actions',
			file: 'github-actions.png',
			options: { bg: 'bg-blue-400/20' }
		},
		{ name: 'Docker', file: 'docker.webp', options: { bg: 'bg-blue-400/20' } },
		{ name: 'Nginx', file: 'nginx.png', options: { bg: 'bg-green-600/20' } },
		{
			name: 'DigitalOcean',
			file: 'digitalocean.png',
			options: { bg: 'bg-neutral-400/20' }
		},
		{
			name: 'Ansible',
			file: 'ansible.png',
			options: { bg: 'bg-neutral-400/20', invert: true }
		},
		{
			name: 'Figma',
			file: 'figma.png',
			options: { bg: 'bg-violet-400/20' }
		}
	] as const;

	let section = $state<HTMLElement | null>(null);
	let transition = useTransitionIn(() => section);
</script>

<div class="bg-muted/40 backdrop-blur-sm">
	<Width>
		<section bind:this={section} class="grid gap-16 py-24 md:grid-cols-2 md:gap-4 md:py-32">
			<div>
				<h1 class="mb-4 text-4xl font-bold">Technologies</h1>
				<p class="text-sm text-muted-foreground">
					Full-stack engineer focused on web development, using a range of technologies to build
					seamless applications from front to back end.
				</p>
			</div>
			<div class="grid grid-cols-4 gap-4 gap-y-8">
				{#each tools as tool, index}
					{@render cardWrapper(tool, index)}
				{/each}
			</div>
		</section>
	</Width>
</div>

{#snippet card(tool: Tool, index: number, hidden: boolean = false)}
	<div in:fly={{ y: 40, duration: 1000, delay: 50 * index }} class={`${hidden && 'invisible'}`}>
		<div class="m-auto mb-2 grid size-12 items-center rounded-lg border p-2 {tool.options.bg}">
			<img
				src={`/img/logos/${tool.file}`}
				alt={tool.name}
				class="aspect-square object-contain {tool.options.invert && 'dark:invert'}"
			/>
		</div>
		<p class="text-center text-xs text-muted-foreground">{tool.name}</p>
	</div>
{/snippet}

{#snippet cardWrapper(tool: Tool, index: number)}
	{#if transition.show}
		{@render card(tool, index)}
	{:else}
		{@render card(tool, index, true)}
	{/if}
{/snippet}
