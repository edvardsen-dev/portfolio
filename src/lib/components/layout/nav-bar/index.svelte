<script lang="ts">
	import Width from '$lib/components/utils/width.svelte';
	import Desktop from './desktop.svelte';
	import Mobile from './mobile.svelte';
</script>

<Width class="z-30">
	<a href="/" aria-label="Go to home page" class="absolute left-0 top-3 h-12 w-24 cursor-pointer">
		<img src="/img/signature.png" alt="Logo" class="h-full w-full object-cover dark:invert" />
	</a>
	<div class="lg:hidden">
		<Mobile />
	</div>
	<div class="max-lg:hidden">
		<Desktop />
	</div>
</Width>
