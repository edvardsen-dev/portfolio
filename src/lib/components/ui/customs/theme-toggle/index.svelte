<script lang="ts">
	import { swMode } from '$lib/composables/useSwMode.svelte';
	import DefaultThemeToggle from './default-theme-toggle.svelte';
	import SwThemeToggle from './sw-theme-toggle.svelte';
</script>

{#if swMode.isActive}
	<SwThemeToggle />
{:else}
	<DefaultThemeToggle />
{/if}
