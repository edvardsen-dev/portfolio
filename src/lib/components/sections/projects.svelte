<script lang="ts">
	import { PUBLIC_CMS_BASE_PATH } from '$env/static/public';
	import Width from '$lib/components/utils/width.svelte';
	import type { Project } from '$lib/features/projects/types';
	import { Radio, ExternalLink, ArrowRight } from 'lucide-svelte';
	import { fly } from 'svelte/transition';

	let { projects }: { projects: Project[] } = $props();
</script>

<Width>
	<section class="mt-24 pb-32 pt-12 md:mt-32 md:pt-20" id="projects">
		<!-- Header -->
		<div class="mb-16 text-center">
			<h1
				class="mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-4xl font-bold text-transparent md:text-5xl"
			>
				Featured Projects
			</h1>
			<p class="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
				A showcase of my recent work, demonstrating skills across different technologies and problem
				domains.
			</p>
		</div>

		<!-- Projects Grid -->
		<div class="space-y-24 lg:space-y-32">
			{#each projects as project, index}
				{@render card(project, index % 2 === 0, index)}
			{/each}
		</div>
	</section>
</Width>

{#snippet card(project: Project, isEven: boolean, index: number)}
	<article
		in:fly={{ y: 50, duration: 1000, delay: index * 200 }}
		class="group relative mx-auto max-w-5xl"
	>
		<!-- Main Card Container -->
		<div
			class="relative overflow-hidden rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm transition-colors duration-500 hover:border-primary/30 hover:bg-card/50"
		>
			<!-- Gradient Overlay on Hover -->
			<div
				class="from-primary/8 via-purple-500/8 to-primary/8 absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100"
			></div>

			<!-- Card Content -->
			<div class="relative">
				<!-- Image Section - Full Width -->
				<div class="relative">
					<a href="/projects/{project.id}" class="group/image relative block overflow-hidden">
						<!-- Image -->
						<img
							src="{PUBLIC_CMS_BASE_PATH}/api/files/{project.collectionId}/{project.id}/{project.thumbnail}"
							alt={project.title}
							class="aspect-video w-full object-cover transition-transform duration-700 group-hover/image:scale-105"
						/>

						<!-- Image Overlay -->
						<div
							class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/image:opacity-100"
						></div>

						<!-- View Project Button -->
						<div
							class="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover/image:opacity-100"
						>
							<div
								class="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-white backdrop-blur-md"
							>
								<ExternalLink class="h-5 w-5" />
								<span class="font-medium">View Project</span>
							</div>
						</div>
					</a>

					<!-- Live Badge - Positioned over image -->
					{#if project.live}
						<div
							class="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm"
						>
							<div class="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
							Live
						</div>
					{/if}
				</div>

				<!-- Content Section -->
				<div class="p-8">
					<!-- Title -->
					<h2 class="mb-4 text-2xl font-bold leading-tight lg:text-3xl">
						{project.title}
					</h2>

					<!-- Description -->
					<p class="mb-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
						{project.description}
					</p>

					<!-- Tech Stack and Actions Row -->
					<div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
						<!-- Tech Stack -->
						<div class="flex-1 space-y-3">
							<h3 class="text-sm font-medium text-foreground/60">Technologies</h3>
							<div class="flex flex-wrap gap-2">
								{#each project.stack as tech}
									<span
										class="rounded-lg bg-muted/80 px-3 py-1.5 text-sm font-medium text-foreground/90 transition-colors duration-300 hover:bg-primary/15 hover:text-primary"
									>
										{tech}
									</span>
								{/each}
							</div>
						</div>

						<!-- Actions -->
						<div class="flex flex-wrap gap-3">
							<a
								href="/projects/{project.id}"
								class="group/btn inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition-[colors,transform] duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
							>
								Learn More
								<ArrowRight class="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
							</a>

							{#if project.live}
								<a
									href={project.live}
									target="_blank"
									class="group/btn inline-flex items-center gap-2 rounded-xl border border-border/60 bg-background/80 px-6 py-3 font-medium transition-[colors,transform] duration-300 hover:scale-105 hover:border-primary/40 hover:bg-primary/5"
								>
									<ExternalLink class="h-4 w-4" />
									Visit Site
								</a>
							{/if}
						</div>
					</div>
				</div>
			</div>
		</div>
	</article>
{/snippet}
