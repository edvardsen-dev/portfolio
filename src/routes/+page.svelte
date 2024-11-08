<script lang="ts">
	import Hero from '$lib/components/sections/hero.svelte';
	import Technologies from '$lib/components/sections/technologies/technologies.svelte';
	import Technologies2 from '$lib/components/sections/technologies/technologies2.svelte';
	import MouseDongle from '$lib/components/ui/customs/mouse-dongle/index.svelte';
	import Experiences from '$lib/components/sections/experience/index.svelte';
	import Projects from '$lib/components/sections/projects.svelte';

	let { data } = $props();
</script>

<MouseDongle />
<div class="min-h-[300vh]">
	<Hero />
	<Technologies2 />
	<Experiences />
	<Projects projects={data.projects} />
</div>
