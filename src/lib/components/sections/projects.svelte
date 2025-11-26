<script lang="ts">
	import { PUBLIC_CMS_BASE_PATH } from '$env/static/public';
	import Width from '$lib/components/utils/width.svelte';
	import type { Project } from '$lib/features/projects/types';
	import { Radio } from 'lucide-svelte';

	let { projects }: { projects: Project[] } = $props();
</script>

<Width>
	<section class="mt-12 pb-64 pt-12 md:mt-20 md:pt-20" id="projects">
		<h1 class="mb-8 text-4xl font-bold">Projects</h1>
		<div class="space-y-16 lg:space-y-12">
			{#each projects as project, index}
				{@render card(project, index % 2 === 0)}
			{/each}
		</div>
	</section>
</Width>

{#snippet card(project: Project, isEven: boolean)}
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
				src="{PUBLIC_CMS_BASE_PATH}/api/files/{project.collectionId}/{project.id}/{project.thumbnail}"
				alt={project.title}
				class="aspect-video object-cover"
			/>
		</a>
		<div
			class="z-10 {isEven ? 'lg:-ml-10' : 'lg:-mr-10'}"
			style={`${!isEven && 'grid-column: 1 / 1; grid-row: 1 / 1'}`}
		>
			<div class="mb-2 flex items-center {isEven && 'lg:flex-row-reverse'} gap-4">
				<h2 class="text-2xl font-bold">{project.title}</h2>
				{#if project.live}
					<a href={project.live} target="_blank" class="flex items-center gap-1 text-primary">
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
			<p class="text-sm text-muted-foreground {isEven && 'lg:text-right'}">
				{project.stack.join(' • ')}
			</p>
		</div>
	</article>
{/snippet}
