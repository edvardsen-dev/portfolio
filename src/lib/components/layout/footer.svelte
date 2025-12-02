<script>
	import Button, { buttonVariants } from '$lib/components/ui/button/button.svelte';
	import { ArrowRight, Codepen, Github, Home, Instagram, Linkedin, Mail } from 'lucide-svelte';
	import Width from '$lib/components/utils/width.svelte';
	import { contacts, links, socials } from '.';
</script>

<footer>
	<div class="bg-muted/30 py-32">
		<Width>
			<h2
				class="mb-4 w-fit bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-xl font-bold text-transparent"
			>
				Thanks for stopping by!
			</h2>
			<p class="mb-8 text-muted-foreground">
				I love connecting with fellow developers and working on interesting projects. Feel free to
				reach out if you'd like to chat about tech, collaboration, or just say hello.
			</p>
			<Button href="mailto:joakimedvardsen2000@gmail.com"><Mail />Say Hello<ArrowRight /></Button>
		</Width>
	</div>
	<Width>
		<div class="grid gap-8 border-b border-t border-muted-foreground/10 py-12">
			<div>
				<h3 class="mb-4 font-semibold">Joakim Edvardsen</h3>
				<p class="mb-4 text-muted-foreground">
					Software architect based in Oslo, Norway. I enjoy building web applictionns and learning
					new technologies in my spare time.
				</p>
				<ul class="flex gap-4">
					{#each socials as social}
						<li class="rounded-lg border bg-background p-2">
							<a href={social.href} target="_blank">
								<social.icon class="size-4" />
							</a>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<h3 class="mb-4 font-semibold">Quick Links</h3>
				<ul class="flex flex-col gap-2">
					{#each links as link}
						<li>
							<a
								href={link.href}
								class="flex items-center gap-2 text-muted-foreground focus-within:text-foreground focus-within:underline hover:text-foreground hover:underline"
								><link.icon class="size-5" />{link.name}</a
							>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<h3 class="mb-4 font-semibold">Get in Touch</h3>
				<ul class="flex flex-col gap-2">
					{#each contacts as contact}
						<li>
							<a
								href={contact.href}
								class="flex items-center gap-2 text-muted-foreground focus-within:text-foreground focus-within:underline hover:text-foreground hover:underline"
								><contact.icon class="size-5" />{contact.value}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		</div>
		<div class="py-4">
			<p class="text-muted-foreground">&copy; 2025 Joakim Edvardsen. All rights reserved.</p>
		</div>
	</Width>
</footer>
