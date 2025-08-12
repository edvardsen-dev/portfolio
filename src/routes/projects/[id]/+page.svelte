<script lang="ts">
	import { PUBLIC_CMS_BASE_PATH } from '$env/static/public';
	import Carousel from '$lib/components/ui/customs/carousel.svelte';
	import Width from '$lib/components/utils/width.svelte';
	import { toHumanDateTime } from '$lib/utils';
	import {
		CodeXml,
		ExternalLink,
		Lightbulb,
		Radio,
		Users,
		ArrowLeft,
		Calendar,
		Tag
	} from 'lucide-svelte';
	import { fly } from 'svelte/transition';

	let { data } = $props();

	const { project } = data;

	const images = project.images.map((image) => ({
		src: `${PUBLIC_CMS_BASE_PATH}/api/files/${project.collectionId}/${project.id}/${image}`,
		alt: image
	}));
</script>

<svelte:head>
	<title>{project.title} | Joakim Edvardsen</title>
	<meta name="description" content={project.description} />
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden">
	<Width class="relative pb-12 pt-24">
		<!-- Back Button -->
		<div in:fly={{ y: 20, duration: 600 }} class="mb-8">
			<a
				href="/#projects"
				class="inline-flex items-center gap-2 rounded-xl bg-muted/50 px-4 py-2 text-sm font-medium transition-[colors,transform] duration-300 hover:scale-105 hover:bg-muted"
			>
				<ArrowLeft class="h-4 w-4" />
				Back to Projects
			</a>
		</div>

		<div class="space-y-12">
			<!-- Project Image/Carousel - Full Width and Larger -->
			<div in:fly={{ y: 20, duration: 600, delay: 200 }} class="w-full">
				<div
					class="overflow-hidden rounded-2xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm"
				>
					<Carousel {images} />
				</div>
			</div>

			<!-- Project Info -->
			<div class="mx-auto max-w-4xl space-y-6">
				<!-- Title -->
				<div in:fly={{ y: 20, duration: 600, delay: 400 }} class="text-center">
					<h1
						class="bg-gradient-to-r from-foreground to-primary bg-clip-text text-4xl font-bold text-transparent lg:text-5xl xl:text-6xl"
					>
						{project.title}
					</h1>
				</div>

				<!-- Description -->
				<div in:fly={{ y: 20, duration: 600, delay: 500 }} class="text-center">
					<p class="mx-auto max-w-3xl leading-relaxed text-muted-foreground">
						{project.description}
					</p>
				</div>

				<!-- Metadata -->
				<div
					in:fly={{ y: 20, duration: 600, delay: 600 }}
					class="flex justify-center text-sm text-muted-foreground"
				>
					<div class="flex items-center gap-2">
						<Calendar class="h-4 w-4" />
						Last updated: {toHumanDateTime(project.updatedAt)}
					</div>
				</div>
			</div>
		</div>
	</Width>
</section>

<!-- Main Content -->
<Width class="pb-32 pt-16">
	<!-- Quick Info Section -->
	<div class="mb-16 space-y-8">
		<!-- Technologies -->
		<div
			in:fly={{ y: 30, duration: 600, delay: 600 }}
			class="rounded-2xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm"
		>
			<div class="mb-6 flex items-center gap-3">
				<div class="rounded-lg bg-primary/10 p-2">
					<CodeXml class="h-5 w-5 text-primary" />
				</div>
				<h2 class="text-xl font-semibold">Technologies Used</h2>
			</div>
			<div class="flex flex-wrap gap-3">
				{#each project.stack as tech}
					<span
						class="inline-flex items-center rounded-full bg-gradient-to-r from-muted/80 to-muted/60 px-4 py-2 text-sm font-medium transition-[colors,transform] duration-300 hover:scale-105 hover:from-primary/15 hover:to-primary/10 hover:text-primary"
					>
						{tech}
					</span>
				{/each}
			</div>
		</div>

		<!-- Features and Contributors Row -->
		<div class="grid gap-6 lg:grid-cols-2">
			<!-- Features -->
			<div
				in:fly={{ y: 30, duration: 600, delay: 700 }}
				class="rounded-2xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm"
			>
				<div class="mb-4 flex items-center gap-3">
					<div class="rounded-lg bg-primary/10 p-2">
						<Lightbulb class="h-5 w-5 text-primary" />
					</div>
					<h2 class="text-lg font-semibold">Key Features</h2>
				</div>
				<ul class="space-y-2">
					{#each project.features as feature}
						<li class="flex items-start gap-2">
							<div class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60"></div>
							<span class="text-sm leading-relaxed text-muted-foreground">{feature}</span>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Contributors -->
			<div
				in:fly={{ y: 30, duration: 600, delay: 800 }}
				class="rounded-2xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm"
			>
				<div class="mb-4 flex items-center gap-3">
					<div class="rounded-lg bg-primary/10 p-2">
						<Users class="h-5 w-5 text-primary" />
					</div>
					<h2 class="text-lg font-semibold">
						{project.contributers.length === 1 ? 'Developer' : 'Contributors'}
					</h2>
				</div>
				<div class="space-y-3">
					{#each project.contributers as contributer}
						<a
							href={contributer.href}
							target="_blank"
							class="group flex items-center gap-3 rounded-lg border border-border/30 bg-background/50 p-3 transition-colors duration-300 hover:border-primary/40 hover:bg-primary/5"
						>
							<div
								class="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary"
							>
								{contributer.name.charAt(0).toUpperCase()}
							</div>
							<span class="flex-1 font-medium">{contributer.name}</span>
							<ExternalLink
								class="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary"
							/>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<!-- Project Details -->
	<div class="grid gap-8 lg:grid-cols-3 lg:gap-12">
		<!-- Content -->
		<div class="lg:col-span-2">
			{#each project.content as content, index}
				<section in:fly={{ y: 30, duration: 600, delay: 900 + index * 100 }} class="mb-12">
					{#if content.title}
						<h2 class="mb-6 text-2xl font-bold lg:text-3xl">{content.title}</h2>
					{/if}
					<div class="prose prose-lg max-w-none">
						{#each content.text as text}
							<p class="mb-6 leading-8 text-muted-foreground">{text}</p>
						{/each}
					</div>
				</section>
			{/each}
		</div>

		<!-- Sidebar -->
		<div class="space-y-8">
			<!-- Resources -->
			<div
				in:fly={{ y: 30, duration: 600, delay: 1000 }}
				class="rounded-2xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm"
			>
				<h2 class="mb-4 flex items-center gap-3 text-xl font-semibold">
					<div class="rounded-lg bg-primary/10 p-2">
						<ExternalLink class="h-5 w-5 text-primary" />
					</div>
					Resources
				</h2>
				<div class="space-y-3">
					{#each project.resources as resource}
						<div class="rounded-lg border border-border/30 p-4">
							<h3 class="mb-2 font-medium">{resource.label}</h3>
							<a
								href={resource.href}
								target="_blank"
								class="break-all text-sm text-primary hover:underline"
							>
								{resource.href}
							</a>
						</div>
					{/each}
				</div>
			</div>

			<!-- Project Actions -->
			<div
				in:fly={{ y: 30, duration: 600, delay: 1100 }}
				class="rounded-2xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm"
			>
				<h2 class="mb-4 text-xl font-semibold">Project Links</h2>
				<div class="space-y-3">
					<a
						href={project.live}
						target="_blank"
						class="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 font-medium text-primary-foreground transition-[colors,transform] duration-300 hover:scale-105 hover:shadow-lg"
					>
						<Radio class="h-4 w-4" />
						View Live Project
					</a>
					<a
						href="/#projects"
						class="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-background/80 px-4 py-3 font-medium transition-transform duration-300 hover:scale-105"
					>
						<ArrowLeft class="h-4 w-4" />
						Back to Projects
					</a>
				</div>
			</div>
		</div>
	</div>
</Width>
