<script>
	import Button, { buttonVariants } from '$lib/components/ui/button/button.svelte';
	import { Home, Mail } from 'lucide-svelte';
	import Width from '$lib/components/utils/width.svelte';
	import { contacts, links, socials } from '.';
</script>

<div class="fixed inset-0 -z-10 flex min-h-screen flex-col">
	<section class="grid flex-grow place-content-center place-items-center bg-primary">
		<h2 class="mb-4 text-4xl font-extrabold uppercase md:text-6xl">Still here?</h2>
		<a href="mailto:joakimedvardsen2000@gmail.com" class={buttonVariants({ variant: 'secondary' })}>
			<Mail />Take contact
		</a>
	</section>
	<footer>
		<div class="bg-neutral-200 dark:bg-muted/60">
			<Width class="grid-cols-3 py-12 max-md:space-y-8 md:grid">
				<ul class="space-y-2">
					{#each links as link}
						{@const Icon = link.icon}
						<li>
							<a href={link.href} class="flex items-center gap-2 hover:underline">
								<Icon class="size-4 text-primary" />
								{link.name}
							</a>
						</li>
					{/each}
				</ul>
				<ul class="space-y-2">
					{#each contacts as contact}
						{@const Icon = contact.icon}
						<li>
							<a
								href={contact.href}
								target="_blank"
								class="flex items-center gap-2 hover:underline"
							>
								<Icon class="size-4 text-primary" />
								{contact.value}
							</a>
						</li>
					{/each}
				</ul>
				<ul class="flex gap-4 self-center">
					{#each socials as social}
						{@const Icon = social.icon}
						<li>
							<a href={social.href} target="_blank"><Icon class="hover:text-primary" /></a>
						</li>
					{/each}
				</ul>
			</Width>
		</div>
		<div>
			<Width class="py-4">
				<p class="text-xs text-muted-foreground">
					&copy; 2024 Joakim Edvardsen - All rights reserverd
				</p>
			</Width>
		</div>
	</footer>
</div>
