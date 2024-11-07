<script lang="ts">
	import Desktop from './desktop.svelte';
	import Mobile from './mobile.svelte';
</script>

<div class="md:hidden">
	<Mobile />
</div>
<div class="max-md:hidden">
	<Desktop />
</div>
