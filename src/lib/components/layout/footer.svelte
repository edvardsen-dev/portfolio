<script lang="ts">
	import Button, { buttonVariants } from '$lib/components/ui/button/button.svelte';
	import { Home, Mail, ArrowRight, Star, Code, Coffee } from 'lucide-svelte';
	import Width from '$lib/components/utils/width.svelte';
	import { contacts, links, socials } from '.';
</script>

<!-- Main Footer Section -->
<footer class="relative mt-32">
	<Width class="relative">
		<!-- Contact Section -->
		<div class="py-16 text-center">
			<div class="mx-auto max-w-3xl space-y-6">
				<!-- Headline -->
				<div class="space-y-4">
					<h2
						class="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
					>
						Thanks for stopping by!
					</h2>
					<p class="mx-auto max-w-2xl leading-relaxed text-muted-foreground">
						I love connecting with fellow developers and working on interesting projects. Feel free
						to reach out if you'd like to chat about tech, collaboration, or just say hello.
					</p>
				</div>

				<!-- Contact Button -->
				<div class="flex justify-center">
					<a
						href="mailto:joakimedvardsen2000@gmail.com"
						class="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition-[colors,transform] duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
					>
						<Mail class="h-4 w-4" />
						Say Hello
						<ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
					</a>
				</div>
			</div>
		</div>

		<!-- Links Section -->
		<div class="border-t border-border/30 py-12">
			<div class="grid gap-8 md:grid-cols-3">
				<!-- About -->
				<div class="space-y-4">
					<h3 class="text-lg font-semibold">Joakim Edvardsen</h3>
					<p class="text-sm leading-relaxed text-muted-foreground">
						Software engineer based in Oslo, Norway. I enjoy building web applications and learning
						new technologies in my spare time.
					</p>
					<!-- Social Icons -->
					<div class="flex gap-3">
						{#each socials as social}
							{@const Icon = social.icon}
							<a
								href={social.href}
								target="_blank"
								class="transition-color flex h-9 w-9 items-center justify-center rounded-lg border border-border/30 bg-background/50 duration-300 hover:border-primary/50 hover:bg-primary/10"
							>
								<Icon class="h-4 w-4" />
							</a>
						{/each}
					</div>
				</div>

				<!-- Quick Links -->
				<div class="space-y-4">
					<h4 class="font-semibold">Quick Links</h4>
					<ul class="space-y-2">
						{#each links as link}
							{@const Icon = link.icon}
							<li>
								<a
									href={link.href}
									class="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
								>
									<Icon class="h-4 w-4" />
									{link.name}
								</a>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Get in Touch -->
				<div class="space-y-4">
					<h4 class="font-semibold">Get in Touch</h4>
					<ul class="space-y-2">
						{#each contacts as contact}
							{@const Icon = contact.icon}
							<li>
								<a
									href={contact.href}
									target="_blank"
									class="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
								>
									<Icon class="h-4 w-4" />
									{contact.value}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div class="border-t border-border/30 py-6">
			<div class="flex flex-col items-center justify-between gap-4 md:flex-row">
				<p class="text-sm text-muted-foreground">
					&copy; 2025 Joakim Edvardsen. All rights reserved.
				</p>
				<div class="flex items-center gap-2 text-sm text-muted-foreground">
					<span>Made with</span>
					<span class="text-red-500">♥</span>
					<span>and lots of coffee</span>
				</div>
			</div>
		</div>
	</Width>
</footer>
