<script lang="ts">
	import Hero from '$lib/components/sections/hero.svelte';
	import Technologies from '$lib/components/sections/technologies/technologies.svelte';
	import Experiences from '$lib/components/sections/experience/index.svelte';
	import Projects from '$lib/components/sections/projects.svelte';
	import HideDongle from '$lib/components/ui/customs/mouse-dongle/hide-dongle.svelte';
	import MouseDongle from '$lib/components/ui/customs/mouse-dongle/index.svelte';
	import { getSwMode } from '$lib/context/sw-mode-context.svelte';

	let { data } = $props();

	const swMode = getSwMode();
</script>

{#if swMode.isActive}
	<MouseDongle />
{/if}

<div class="min-h-[300vh]">
	<Hero />
	<Technologies />
	<HideDongle>
		<Experiences />
		{#await data.projects then projects}
			<Projects projects={projects} />
		{/await}
	</HideDongle>
</div>
