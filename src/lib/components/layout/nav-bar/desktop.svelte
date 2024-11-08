<script lang="ts">
	import ThemeToggle from '$lib/components/ui/customs/theme-toggle.svelte';
	import { links } from '..';
</script>

<nav
	class="fixed left-1/2 top-4 -translate-x-1/2 rounded-full border bg-card/80 px-8 py-2 shadow backdrop-blur-sm"
>
	<ul class="flex items-center gap-6">
		{#each links as link, index}
			<li><a href={link.href}>{link.name}</a></li>
			{@render divider()}
		{/each}
		<ThemeToggle />
	</ul>
</nav>

{#snippet divider()}
	<div class="h-2 w-0.5 rounded-full bg-primary"></div>
{/snippet}
