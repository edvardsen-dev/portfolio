<script lang="ts">
	import Hero from '$lib/components/sections/hero.svelte';
	import Technologies from '$lib/components/sections/technologies/technologies.svelte';
	import Technologies2 from '$lib/components/sections/technologies/technologies2.svelte';
	import Experiences from '$lib/components/sections/experience/index.svelte';
	import Projects from '$lib/components/sections/projects.svelte';
	import HideDongle from '$lib/components/ui/customs/mouse-dongle/hide-dongle.svelte';

	let { data } = $props();
</script>

<div class="min-h-[300vh]">
	<Hero />
	<Technologies2 />
	<HideDongle>
		<Experiences />
		<Projects projects={data.projects} />
	</HideDongle>
</div>
