<script lang="ts">
	import Width from '$lib/components/utils/width.svelte';
	import { toHumanDate } from '$lib/utils';
	import { Globe, Linkedin, Mail, Phone, Pin } from 'lucide-svelte';

	const contacts = [
		{
			label: 'joakimedvardsen2000@gmail.com',
			href: 'mailto:joakimedvardsen2000@gmail.com',
			icon: Mail
		},
		{ label: '+47 901 59 363 ', href: 'tel:+4790159363', icon: Phone },
		{ label: 'Trondheim, Norway', href: 'https://maps.app.goo.gl/qHYuA72PZf55RqH56', icon: Pin },
		{
			label: 'linkedin.com/in/joakim-edvardsen',
			href: 'https://www.linkedin.com/in/joakim-edvardsen-665043220/',
			icon: Linkedin
		},
		{ label: 'edvardsen.dev', href: 'https://edvardsen.dev', icon: Globe }
	];

	let { data } = $props();
</script>

<Width class="pb-32 pt-24 md:pt-32">
	<section class="custom-grid mb-16 md:gap-x-4">
		<ul class="title max-md:space-y-2 md:grid md:grid-cols-2 md:items-center md:gap-2">
			{#each contacts as contact}
				{@const Icon = contact.icon}
				<li>
					<a href={contact.href} target="_blank" class="flex items-center gap-2 hover:underline"
						><Icon class="size-4 text-primary" />{contact.label}</a
					>
				</li>
			{/each}
		</ul>
	</section>
	<section class="mb-24">
		<div class="custom-grid md:gap-x-4">
			<h1 class="title mb-4 text-xl font-extrabold md:mb-8 md:text-3xl">Work Experience</h1>
		</div>
		{#each data.experiences as experience}
			{#if !experience.disabled}
				<article class="custom-grid mb-12 md:mb-16 md:gap-x-4">
					<div class="title mb-4">
						<p class="text-sm">{experience.company.name}</p>
						<h2 class="text-lg font-bold uppercase text-primary">{experience.title}</h2>
					</div>
					<div
						class="sidebar mb-4 flex justify-between gap-4 text-sm text-muted-foreground max-md:items-end md:flex-col"
					>
						<p>
							{#if experience.date.start}
								{toHumanDate(experience.date.start)}
							{/if}
							-
							<br />
							{#if experience.date.end}
								{toHumanDate(experience.date.end)}
							{/if}
						</p>
						<p>{experience.location}</p>
					</div>
					<p class="description max-w-[80ch] leading-7">{experience.description}</p>
				</article>
			{/if}
		{/each}
	</section>
	<section>
		<div class="custom-grid md:gap-x-4">
			<h1 class="title mb-4 text-xl font-extrabold md:mb-8 md:text-3xl">Education</h1>
		</div>
		{#each data.educations as education}
			<article class="custom-grid mb-12 md:gap-x-4">
				<div class="title mb-2">
					<h2 class="text-lg font-bold uppercase text-primary">{education.title}</h2>
					<p class="max-w-[80ch] leading-7">{education.description}</p>
				</div>
				<div
					class="sidebar mb-4 flex justify-between gap-4 text-sm text-muted-foreground max-md:items-end md:flex-col"
				>
					<p>
						{#if education.date.start}
							{toHumanDate(education.date.start)}
						{/if}
						-
						<br />
						{#if education.date.end}
							{toHumanDate(education.date.end)}
						{/if}
					</p>
					<p>{education.location}</p>
				</div>
			</article>
		{/each}
	</section>
</Width>

<style scoped>
	@media only screen and (min-width: 768px) {
		.custom-grid {
			display: grid;
			grid-template-columns: 150px auto;
			grid-template-areas:
				'sidebar title'
				'sidebar description';
		}

		.sidebar {
			grid-area: sidebar;
		}

		.title {
			grid-area: title;
		}

		.description {
			grid-area: description;
		}
	}
</style>
