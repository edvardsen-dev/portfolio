<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { Menu } from 'lucide-svelte';
	import { links, socials } from '.';
	import ThemeToggle from '../theme-toggle.svelte';

	let open = $state(false);
</script>

<Sheet.Root bind:open>
	<Sheet.Trigger class="absolute right-4 top-5">
		<Menu />
	</Sheet.Trigger>
	<Sheet.Content side="right">
		<Sheet.Header>
			<Sheet.Title class="text-primary">Menu</Sheet.Title>
		</Sheet.Header>
		<div class="flex h-full flex-col justify-between py-8">
			<div>
				<ul class="mb-8">
					{#each links as link}
						{@const Icon = link.icon}
						<li>
							<a
								href={link.href}
								onclick={() => (open = false)}
								class="mb-4 flex items-center gap-4 hover:underline"
							>
								<Icon class="size-4" />
								{link.name}
							</a>
						</li>
					{/each}
				</ul>
				<div>
					<h1 class="mb-2 font-semibold">Settings</h1>
					<div class="flex items-center justify-between text-sm">
						Toggle theme
						<ThemeToggle />
					</div>
				</div>
			</div>
			<div class="flex w-full flex-col items-center">
				<ul class="mb-4 flex gap-4">
					{#each socials as link}
						{@const Icon = link.icon}
						<li>
							<a href={link.href} target="_blank" class="grid justify-items-center">
								<Icon class="mb-1 size-6 hover:text-primary" />
							</a>
						</li>
					{/each}
				</ul>
				<p class="text-xs text-muted-foreground">Copyright &copy; 2024. All rights reserved</p>
			</div>
		</div>
	</Sheet.Content>
</Sheet.Root>
