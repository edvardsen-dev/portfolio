<script lang="ts">
	import Hero from '$lib/components/sections/hero.svelte';
	import Technologies from '$lib/components/sections/technologies.svelte';
	import HideDongle from '$lib/components/ui/customs/mouse-dongle/hide-dongle.svelte';
	import MouseDongle from '$lib/components/ui/customs/mouse-dongle/index.svelte';
</script>

<MouseDongle />
<div>
	<Hero />
	<HideDongle>
		<Technologies />
	</HideDongle>
</div>
