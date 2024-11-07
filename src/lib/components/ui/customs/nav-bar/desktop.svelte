<script lang="ts">
	import { links } from '.';
	import ThemeToggle from '../theme-toggle.svelte';
</script>

<nav
	class="fixed left-1/2 top-4 -translate-x-1/2 rounded-full border border-neutral-200 bg-neutral-100 px-8 py-2 shadow dark:border-neutral-700 dark:bg-neutral-900"
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
