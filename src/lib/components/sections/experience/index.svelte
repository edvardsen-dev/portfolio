<script lang="ts">
	import Width from '$lib/components/utils/width.svelte';
	import { useTransitionIn } from '$lib/composables/useTransitionIn.svelte';
	import { toHumanDate } from '$lib/utils';
	import { fly } from 'svelte/transition';
	import { experiences } from '.';
	import type { Experience } from '$lib/features/experiences/types';
	import { Calendar, MapPin } from 'lucide-svelte';

	let section: HTMLElement | null = null;

	let transition = useTransitionIn(() => section);
</script>

<Width>
	<section bind:this={section} class="pt-24 md:pt-32" id="experience">
		<!-- Header -->
		<div class="mb-16 text-center">
			<h1
				class="mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-4xl font-bold text-transparent md:text-5xl"
			>
				Professional Experience
			</h1>
			<p class="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
				My journey in software development, working with talented teams to build innovative
				solutions.
			</p>
		</div>

		<!-- Experience Timeline -->
		<div class="relative">
			<!-- Timeline line (only visible on desktop) -->
			<div
				class="absolute bottom-0 left-4 top-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-0.5 lg:left-1/2"
			></div>

			<div class="space-y-12 md:space-y-16">
				{#each experiences as experience, index}
					{@render cardWrapper(experience, index)}
				{/each}
			</div>
		</div>
	</section>
</Width>

{#snippet card(experience: Experience, index: number, hidden: boolean = false)}
	{@const isEven = index % 2 === 0}
	{@const flyDirection = isEven ? -1 : 1}
	{@const flyOptions = { x: 100 * flyDirection, duration: 1000, delay: index * 100 }}

	<article in:fly={flyOptions} class="relative {hidden && 'invisible'}">
		<!-- Timeline dot -->
		<div class="absolute left-4 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-primary lg:left-1/2">
			<div class="absolute inset-0 animate-ping rounded-full bg-primary/50"></div>
			<div class="relative h-3 w-3 rounded-full bg-primary"></div>
		</div>

		<!-- Mobile Layout (stacked) -->
		<div class="pl-10 lg:hidden">
			<div
				class="group relative overflow-hidden rounded-2xl border bg-card/50 p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-card/80 hover:shadow-xl hover:shadow-primary/10"
			>
				{@render experienceContent(experience, false)}
			</div>
		</div>

		<!-- Desktop Layout (alternating timeline) -->
		<div class="hidden lg:block">
			<div class="grid grid-cols-2 items-center gap-8">
				{#if isEven}
					<!-- Even items: content on left, empty space on right -->
					<div class="pr-8 text-right">
						<div
							class="group relative overflow-hidden rounded-2xl border bg-card/50 p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-card/80 hover:shadow-xl hover:shadow-primary/10"
						>
							{@render experienceContent(experience, isEven)}
						</div>
					</div>
					<div></div>
				{:else}
					<!-- Odd items: empty space on left, content on right -->
					<div></div>
					<div class="pl-8">
						<div
							class="group relative overflow-hidden rounded-2xl border bg-card/50 p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-card/80 hover:shadow-xl hover:shadow-primary/10"
						>
							{@render experienceContent(experience, isEven)}
						</div>
					</div>
				{/if}
			</div>
		</div>
	</article>
{/snippet}

{#snippet experienceContent(experience: Experience, isEven: boolean = false)}
	<!-- Company Logo and Info -->
	<div class="mb-4 flex items-start gap-4 {isEven ? 'flex-row-reverse' : ''}">
		<a
			href={experience.company.href}
			target="_blank"
			class="flex aspect-square size-16 items-center justify-center rounded-xl border-2 border-primary/20 p-2 transition-transform duration-300 hover:scale-105 hover:border-primary/40 {experience
				.company.bg}"
		>
			<img
				src={`/img/logos/${experience.company.logo}`}
				alt={experience.company.name}
				class="object-contain"
			/>
		</a>
		<div class="min-w-0 flex-1 {isEven ? 'text-right' : ''}">
			<h2
				class="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary"
			>
				{experience.title}
			</h2>
			<h3 class="text-lg font-semibold text-primary">
				{experience.company.name}
			</h3>
			<div
				class="mt-2 flex items-center gap-4 text-sm text-muted-foreground {isEven
					? 'justify-end'
					: ''}"
			>
				<div class="flex items-center gap-1">
					<Calendar class="h-4 w-4" />
					<span>
						{experience.date.start ? toHumanDate(experience.date.start) : ''} -
						{experience.date.end ? toHumanDate(experience.date.end) : 'Present'}
					</span>
				</div>
			</div>
		</div>
	</div>

	<!-- Description -->
	<p class="mb-6 text-sm leading-7 text-foreground/80">
		{experience.description}
	</p>

	<!-- Technologies -->
	{#if experience.technologies}
		<div class="space-y-2">
			<h4 class="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
				Technologies Used
			</h4>
			<div class="flex flex-wrap gap-2 {isEven ? 'justify-end' : ''}">
				{#each experience.technologies as technology}
					<span
						class="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20"
					>
						{technology}
					</span>
				{/each}
			</div>
		</div>
	{/if}
{/snippet}

{#snippet cardWrapper(experience: Experience, index: number)}
	{#if transition.show}
		{@render card(experience, index)}
	{:else}
		{@render card(experience, index, true)}
	{/if}
{/snippet}
