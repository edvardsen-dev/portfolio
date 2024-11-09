<script lang="ts">
	import { page } from '$app/stores';
	import NotFound from '$lib/components/errors/not-found.svelte';
	import Unexpected from '$lib/components/errors/unexpected.svelte';
	import StarWarsToggle from '$lib/components/ui/customs/star-wars-toggle.svelte';
	import Width from '$lib/components/utils/width.svelte';
</script>

<Width class="grid min-h-screen place-content-center">
	{#if $page.status !== 404}
		<NotFound />
	{:else}
		<Unexpected />
	{/if}
</Width>
