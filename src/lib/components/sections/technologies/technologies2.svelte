<script lang="ts">
	import { fly } from 'svelte/transition';
	import Width from '../../utils/width.svelte';
	import { onMount } from 'svelte';

	type Tool = {
		name: string;
		file: string;
		options: { bg: string; invert?: boolean };
	};

	const tools: Tool[] = [
		{
			name: 'SvelteKit',
			file: 'svelte.png',
			options: { bg: 'bg-orange-400/20' }
		},
		{
			name: 'NextJs',
			file: 'nextjs.png',
			options: { bg: 'bg-neutral-400/20', invert: true }
		},
		{ name: 'Vue', file: 'vue.png', options: { bg: 'bg-green-400/20' } },
		{
			name: 'Tailwind',
			file: 'tailwind.png',
			options: { bg: 'bg-blue-400/20' }
		},
		{ name: 'Java', file: 'java.png', options: { bg: 'bg-blue-400/20' } },
		{
			name: 'Spring Boot',
			file: 'spring-boot.png',
			options: { bg: 'bg-green-400/20' }
		},
		{
			name: 'PostgreSQL',
			file: 'postgresql.png',
			options: { bg: 'bg-blue-400/20' }
		},
		{
			name: 'GitHub',
			file: 'github.png',
			options: { bg: 'bg-neutral-400/20', invert: true }
		},
		{
			name: 'GitHub Actions',
			file: 'github-actions.png',
			options: { bg: 'bg-blue-400/20' }
		},
		{ name: 'GitLab', file: 'gitlab.png', options: { bg: 'bg-orange-400/20' } },
		{ name: 'Docker', file: 'docker.webp', options: { bg: 'bg-blue-400/20' } },
		{ name: 'Nginx', file: 'nginx.png', options: { bg: 'bg-green-400/20' } },
		{
			name: 'DigitalOcean',
			file: 'digitalocean.png',
			options: { bg: 'bg-neutral-400/20' }
		},
		{
			name: 'Ansible',
			file: 'ansible.png',
			options: { bg: 'bg-neutral-400/20', invert: true }
		}
	] as const;

	let section = $state<HTMLElement | null>(null);
	let showTechnologies = $state(false);

	onMount(() => {
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.8
		};

		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					showTechnologies = true;

					observer.unobserve(entry.target);
				}
			});
		}, options);

		do {
			if (section) {
				observer.observe(section);
			}
		} while (section === null);
	});
</script>

<Width>
	<section bind:this={section} class="grid gap-16 py-16 md:grid-cols-2 md:gap-4 md:py-32">
		<div>
			<h1 class="mb-4 text-3xl font-bold">Technologies</h1>
			<p class="text-sm text-muted-foreground">
				Full-stack engineer focused on web development, using a range of technologies to build
				seamless applications from front to back end.
			</p>
		</div>
		<div class="grid grid-cols-4 gap-4 gap-y-8">
			{#each tools as tool, index}
				{@render card(tool, index)}
			{/each}
		</div>
	</section>
</Width>

{#snippet card(tool: Tool, index: number)}
	{#if showTechnologies}
		<div in:fly={{ y: 40, duration: 1000, delay: 100 * index }}>
			<div class="m-auto mb-2 grid size-12 items-center rounded-lg border p-2 {tool.options.bg}">
				<img
					src={`/img/logos/${tool.file}`}
					alt={tool.name}
					class="object-contain {tool.options.invert && 'dark:invert'}"
				/>
			</div>
			<p class="text-center text-xs text-muted-foreground">{tool.name}</p>
		</div>
	{:else}
		<div class="h-[40px]"></div>
	{/if}
{/snippet}
