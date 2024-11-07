<script lang="ts">
	let { children } = $props();
</script>

<div class="m-auto" style="width: min(1200px, 90%)">
	{@render children()}
</div>
