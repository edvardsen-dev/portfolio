<script lang="ts">
	import { getSwMode } from '$lib/context/sw-mode-context.svelte';
	import DefaultThemeToggle from './default-theme-toggle.svelte';
	import SwThemeToggle from './sw-theme-toggle.svelte';

	const swMode = getSwMode();
</script>

{#if swMode.isActive}
	<SwThemeToggle />
{:else}
	<DefaultThemeToggle />
{/if}
