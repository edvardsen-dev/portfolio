<script lang="ts">
	import Carousel from '$lib/components/ui/customs/carousel.svelte';
	import Width from '$lib/components/utils/width.svelte';

	let { data } = $props();
</script>

<Width class="pb-32 pt-24">
	<Carousel />
</Width>
