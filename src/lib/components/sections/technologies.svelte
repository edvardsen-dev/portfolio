<script>
	import Width from '../utils/width.svelte';

	const tools = [
		{ name: 'SvelteKit', file: 'svelte.png', options: { object: 'contain' } },
		{ name: 'NextJs', file: 'nextjs.png', options: { object: 'cover', invert: true } },
		{ name: 'Vue', file: 'vue.png', options: { object: 'cover' } },
		{ name: 'Tailwind', file: 'tailwind.png', options: { object: 'contain' } },
		{ name: 'Java', file: 'java.png', options: { object: 'cover' } },
		{ name: 'Spring Boot', file: 'spring-boot.png', options: { object: 'contain' } },
		{ name: 'PostgreSQL', file: 'postgresql.png', options: { obhect: 'cover' } },
		{ name: 'GitHub', file: 'github.png', options: { object: 'cover', invert: true } },
		{ name: 'GitHub Actions', file: 'github-actions.png', options: { object: 'cover' } },
		{ name: 'GitLab', file: 'gitlab.png', options: { object: 'contain' } },
		{ name: 'Docker', file: 'docker.webp', options: { object: 'contain' } },
		{ name: 'Nginx', file: 'nginx.png', options: { object: 'contain' } },
		{ name: 'DigitalOcean', file: 'digitalocean.png', options: { object: 'contain' } },
		{ name: 'Ansible', file: 'ansible.png', options: { object: 'cover', invert: true } }
	];
</script>

<Width>
	<section class="grid gap-16 py-16 md:grid-cols-2 md:gap-4 md:py-32">
		<div>
			<h1 class="mb-4 text-3xl font-bold">Technologies</h1>
			<p class="text-sm text-muted-foreground">
				Full-stack engineer focused on web development, using a range of technologies to build
				seamless applications from front to back end.
			</p>
		</div>
		<div class="grid grid-cols-4 gap-4 gap-y-8">
			{#each tools as tool}
				<div>
					<img
						src={`/img/logos/${tool.file}`}
						alt={tool.name}
						class="m-auto mb-2 h-10 w-10 {tool.options.invert && 'dark:invert'}"
						style="object-fit: {tool.options.object}"
					/>
					<p class="text-center text-xs text-muted-foreground">{tool.name}</p>
				</div>
			{/each}
		</div>
	</section>
</Width>
