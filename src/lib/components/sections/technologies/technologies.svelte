<script lang="ts">
	import Width from '$lib/components/utils/width.svelte';
	import { useTransitionIn } from '$lib/composables/useTransitionIn.svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	type Tool = {
		name: string;
		file: string;
		href: string;
		description: string;
		options?: { bg: string };
	};

	const tools: Tool[] = [
		{
			name: 'TypeScript',
			file: 'typescript.png',
			href: 'https://www.typescriptlang.org/',
			description: 'JavaScript with Types',
			options: { bg: 'bg-blue-400/20' }
		},
		{
			name: 'SvelteKit',
			file: 'svelte.png',
			href: 'https://svelte.dev/',
			description: 'JS Meta Framework',
			options: { bg: 'bg-orange-600/20' }
		},
		{
			name: 'Tailwind',
			file: 'tailwind.png',
			href: 'https://tailwindcss.com/',
			description: 'CSS Framework',
			options: { bg: 'bg-blue-400/20' }
		},
		{
			name: 'Drizzle',
			file: 'drizzle.png',
			href: 'https://orm.drizzle.team/',
			description: 'JavaScript ORM',
			options: { bg: 'bg-neutral-600/20' }
		},
		{
			name: 'Java',
			file: 'java.png',
			href: 'https://www.java.com/en/',
			description: 'Object-Oriented Language',
			options: { bg: 'bg-blue-400/20' }
		},
		{
			name: 'Spring Boot',
			file: 'spring-boot.png',
			href: 'https://spring.io/',
			description: 'Java Framwork for APIs',
			options: { bg: 'bg-green-400/20' }
		},
		{
			name: 'Git',
			file: 'git.png',
			href: 'https://git-scm.com/',
			description: 'Version Control',
			options: { bg: 'bg-orange-600/20' }
		},
		{
			name: 'Docker',
			file: 'docker.webp',
			href: 'https://www.docker.com/',
			description: 'Containerization',
			options: { bg: 'bg-blue-400/20' }
		}
	] as const;

	let section = $state<HTMLElement | null>(null);
	let transition = useTransitionIn(() => section);
</script>

<Width class="py-32">
	<section bind:this={section}>
		<h1 class="mb-2 text-3xl font-bold">Technologies</h1>
		<p class="mb-16 text-sm text-muted-foreground">
			Full-stack engineer focused on web development, using a range of technologies to build
			seamless applications from front to back end.
		</p>
		<ul class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{#each tools as tool, index}
				{@render cardWrapper(tool, index)}
			{/each}
		</ul>
	</section>
</Width>

{#snippet card(tool: Tool, index: number, hidden: boolean = false)}
	<li in:fly={{ y: 40, duration: 1000, delay: index * 100 }} class={`${hidden && 'invisible'}`}>
		<a
			href={tool.href}
			target="_blank"
			class="flex gap-4 rounded-lg border bg-card p-4 transition-colors hover:bg-card/70"
		>
			<img
				src={`/img/logos/${tool.file}`}
				alt={tool.name}
				class="size-10 rounded-lg border object-contain p-1.5 {tool.options?.bg}"
			/>
			<div>
				<h2>{tool.name}</h2>
				<p class="text-xs text-muted-foreground">{tool.description}</p>
			</div>
		</a>
	</li>
{/snippet}

{#snippet cardWrapper(tool: Tool, index: number)}
	{#if transition.show}
		{@render card(tool, index)}
	{:else}
		{@render card(tool, index, true)}
	{/if}
{/snippet}
