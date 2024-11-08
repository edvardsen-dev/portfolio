<script lang="ts">
	import Width from '$lib/components/utils/width.svelte';
	import { useTransitionIn } from '$lib/composables/useTransitionIn.svelte';
	import { toHumanDate } from '$lib/utils';
	import { fly } from 'svelte/transition';
	import { experiences } from '.';
	import type { Experience } from '$lib/types';

	let section: HTMLElement | null = null;

	let transition = useTransitionIn(() => section);
</script>

<Width>
	<section bind:this={section} class="pb-4 pt-16 md:py-32">
		<h1 class="mb-8 text-center text-3xl font-bold md:mb-16">Experience</h1>
		<div class="grid gap-16 md:grid-cols-2 md:gap-4">
			{#each experiences as experience, index}
				{@render cardWrapper(experience, index)}
			{/each}
		</div>
	</section>
</Width>

{#snippet card(experience: Experience, index: number, hidden: boolean = false)}
	{@const flyDirection = index % 2 === 0 ? -1 : 1}
	{@const flyOptions = { x: 100 * flyDirection, duration: 1000 }}
	<article in:fly={flyOptions} class="flex flex-col {hidden && 'invisible'}">
		<div class="mb-2 flex flex-grow gap-4 rounded-lg border bg-card/80 p-4 backdrop-blur-sm">
			<a
				href={experience.company.href}
				target="_blank"
				class="flex aspect-square size-20 items-center border p-2 {experience.company.bg}"
			>
				<img
					src={`/img/logos/${experience.company.logo}`}
					alt={experience.company.name}
					class="object-contain"
				/>
			</a>
			<div>
				<h2 class="text-lg font-bold">{experience.company.name} - {experience.title}</h2>
				<p class="mb-4 text-sm text-muted-foreground">
					{experience.date.start ? toHumanDate(experience.date.start) : ''} - {experience.date.end
						? toHumanDate(experience.date.end)
						: ''}
				</p>
				<p class="text-sm leading-7">{experience.description}</p>
			</div>
		</div>
		<ul class="flex gap-4 self-center text-sm text-muted-foreground">
			{#each experience.technologies as technology}
				<li>
					{technology}
				</li>
			{/each}
		</ul>
	</article>
{/snippet}

{#snippet cardWrapper(experience: Experience, index: number)}
	{#if transition.show}
		{@render card(experience, index)}
	{:else}
		{@render card(experience, index, true)}
	{/if}
{/snippet}
