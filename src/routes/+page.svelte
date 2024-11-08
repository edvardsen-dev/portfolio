<script lang="ts">
	import Hero from '$lib/components/sections/hero.svelte';
	import Technologies from '$lib/components/sections/technologies/technologies.svelte';
	import Technologies2 from '$lib/components/sections/technologies/technologies2.svelte';
	import HideDongle from '$lib/components/ui/customs/mouse-dongle/hide-dongle.svelte';
	import MouseDongle from '$lib/components/ui/customs/mouse-dongle/index.svelte';
	import Experiences from '$lib/components/sections/experience/index.svelte';
</script>

<MouseDongle />
<div class="min-h-[300vh]">
	<Hero />
	<HideDongle>
		<Technologies2 />
		<Experiences />
	</HideDongle>

	<p>yo</p>
</div>
