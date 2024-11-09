<script lang="ts">
	import { slide } from 'svelte/transition';

	let { checked = $bindable(false) }: { checked?: boolean } = $props();
</script>

<button class="flex w-[112px] items-center" onclick={() => (checked = !checked)}>
	<img src="/img/luke-lightsaber.png" alt="Luke's lightsaber" class="z-10 w-8" />
	{#if checked}
		<div
			in:slide={{ duration: 200, axis: 'x' }}
			class="relative flex h-1 w-20 items-center rounded-full bg-green-400 pr-1"
			style="box-shadow: 0 0 5px 5px #4ade80"
		>
			<div
				class="absolute -left-1 h-0.5 w-20 rounded-full bg-white"
				style="box-shadow: 0 0 5px 1px #fff"
			></div>
		</div>
	{:else}
		<div
			class="invisible flex h-1 w-20 items-center rounded-full bg-green-400 px-1"
			style="box-shadow: 0 0 5px 5px #4ade80"
		>
			<div class="h-0.5 w-full rounded-full bg-white" style="box-shadow: 0 0 5px 1px #fff"></div>
		</div>
	{/if}
</button>
