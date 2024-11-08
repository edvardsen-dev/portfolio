<script lang="ts">
	import Width from '$lib/components/utils/width.svelte';
	import type { ProjectOverview } from '$lib/dtos';

	let { projects }: { projects: ProjectOverview[] } = $props();
</script>

<Width>
	<section class="py-32">
		<h1 class="text-3xl font-bold">Projects</h1>
		{#each projects as project}
			<article>
				<a href="/projects/{project.id}" class="group relative">
					<div
						class="absolute inset-0 bg-neutral-950/60 transition-colors group-hover:bg-transparent"
					></div>
					<img
						src="/img/projects/{project.title.toLowerCase()}/{project.thumbnail.name}"
						alt={project.thumbnail.alt}
					/>
				</a>
			</article>
		{/each}
	</section>
</Width>
