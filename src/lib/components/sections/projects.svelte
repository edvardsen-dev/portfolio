<script lang="ts">
	import Width from '$lib/components/utils/width.svelte';
	import type { ProjectOverview } from '$lib/dtos';
	import { Radio } from 'lucide-svelte';

	let { projects }: { projects: ProjectOverview[] } = $props();
</script>

<Width>
	<section class="py-32">
		<h1 class="mb-8 text-3xl font-bold">Projects</h1>
		<div class="space-y-16 lg:space-y-8">
			{#each projects as project, index}
				{@render card(project, index % 2 === 0)}
			{/each}
		</div>
	</section>
</Width>

{#snippet card(project: ProjectOverview, isEven: boolean)}
	{@const imgDir = project.title.toLowerCase().replaceAll(' ', '-')}
	<article class="items-center lg:grid lg:grid-cols-2 {!isEven && ''}">
		<a
			href="/projects/{project.id}"
			class="group relative mb-4 block"
			style={`${!isEven && 'grid-column: 2 / 2; grid-row: 1 / 1'}`}
		>
			<div
				class="absolute inset-0 transition-colors group-hover:bg-transparent dark:bg-neutral-950/60"
			></div>
			<img
				src="/img/projects/{imgDir}/{project.thumbnail.name}"
				alt={project.thumbnail.alt}
				class="aspect-video object-cover"
			/>
		</a>
		<div
			class="z-10 {isEven ? 'lg:-ml-10' : 'lg:-mr-10'}"
			style={`${!isEven && 'grid-column: 1 / 1; grid-row: 1 / 1'}`}
		>
			<div class="mb-2 flex items-center {isEven && 'lg:flex-row-reverse'} gap-4">
				<h2 class="text-xl font-bold">{project.title}</h2>
				{#if project.live}
					<a href={project.live} class="flex items-center gap-1 text-primary">
						<Radio class="size-4" />
						Live
					</a>
				{/if}
			</div>
			<div
				class="mb-2 rounded-lg border bg-card p-4 text-sm lg:bg-card/80 lg:shadow-lg lg:backdrop-blur-sm"
			>
				<p class="mb-4 leading-6">{project.description}</p>
				<a href="/projects/{project.id}" class="underline">Read more</a>
			</div>
			<p class="text-sm text-muted-foreground">{project.stack.join(' • ')}</p>
		</div>
	</article>
{/snippet}
