<script lang="ts">
	import Carousel from '$lib/components/ui/customs/carousel.svelte';
	import Width from '$lib/components/utils/width.svelte';
	import { toHumanDate, toHumanDateTime } from '$lib/utils';
	import { Code, CodeXml, ExternalLink, Lightbulb, Radio, Users } from 'lucide-svelte';

	let { data } = $props();

	const imgDir = data.project.title.toLowerCase().replaceAll(' ', '-');
	const fullImgDir = `/img/projects/${imgDir}`;

	const carouselImages = data.project.images.map((img) => ({
		src: `${fullImgDir}/${img.name}`,
		alt: img.alt
	}));
</script>

<Width class="pb-32 pt-24">
	<Carousel images={carouselImages} />
	<article>
		<section class="mb-8">
			{#if data.project.live}
				<a href={data.project.live} target="_blank" class="flex items-center gap-1 text-primary"
					><Radio class="size-4" /> Live</a
				>
			{/if}
			<h1 class="text-3xl font-extrabold">{data.project.title}</h1>
			<p class="text-sm text-muted-foreground">
				Last updated: {toHumanDateTime(data.project.updatedAt)}
			</p>
		</section>
		<section class="mb-12">
			<div class="mb-8">
				<h2 class="mb-2 flex items-center gap-2"><CodeXml />Technologies</h2>
				<ul class="flex flex-wrap gap-x-2 gap-y-4">
					{#each data.project.stack as tech}
						<li class="rounded-full bg-muted px-4 py-1 text-xs text-muted-foreground">{tech}</li>
					{/each}
				</ul>
			</div>
			<div class="mb-8">
				<h2 class="mb-2 flex items-center gap-2"><Lightbulb />Features</h2>
				<ul class="flex flex-wrap gap-x-2 gap-y-4">
					{#each data.project.features as feature}
						<li class="rounded-full bg-muted px-4 py-1 text-xs text-muted-foreground">
							{feature}
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<h2 class="mb-2 flex items-center gap-2"><Users />Contributers</h2>
				<ul class="flex flex-wrap gap-x-2 gap-y-4">
					{#each data.project.contributers as contributer}
						<li
							class="rounded-full bg-muted px-4 py-1 text-xs text-muted-foreground hover:bg-accent"
						>
							<a href={contributer.href} target="_blank" class="flex items-center gap-2"
								>{contributer.name} <ExternalLink class="size-3" /></a
							>
						</li>
					{/each}
				</ul>
			</div>
		</section>
		{#each data.project.content as content}
			<section class="mb-12 w-[80ch]">
				{#if content.title}
					<h2 class="mb-4 text-xl font-bold">{content.title}</h2>
				{/if}
				{#each content.text as text}
					<p class="mb-4 leading-8 opacity-90">{text}</p>
				{/each}
			</section>
		{/each}
		<seciton>
			<h2 class="mb-4 text-xl font-bold">Resources</h2>
			<ul class="ml-6 list-disc space-y-1">
				{#each data.project.resources as resource}
					<li>
						{resource.label}:
						<a href={resource.href} target="_blank" class="text-primary underline"
							>{resource.href}</a
						>
					</li>
				{/each}
			</ul>
		</seciton>
	</article>
</Width>
