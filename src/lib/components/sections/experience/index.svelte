<script lang="ts">
	import Width from '$lib/components/utils/width.svelte';
	import { useTransitionIn } from '$lib/composables/useTransitionIn.svelte';
	import { toHumanDate } from '$lib/utils';
	import { fade, fly } from 'svelte/transition';
	import { experiences, type Experience } from '.';
	import { cubicOut } from 'svelte/easing';

	let section: HTMLElement | null = null;

	let transition = useTransitionIn(() => section);
</script>

<Width>
	<section bind:this={section} class="py-32">
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
		<div class="mb-2 flex flex-grow gap-4 rounded-lg border bg-card p-4">
			<img
				src={`/img/logos/${experience.company.logo}`}
				alt={experience.company.name}
				class="aspect-square size-20 object-contain {experience.company.bg} mb-2 border p-2"
			/>
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
