<script lang="ts">
	import { enhance } from '$app/forms';
	import { swMode } from '$lib/composables/useSwMode.svelte';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { fade } from 'svelte/transition';

	let { class: clazz }: { class?: string } = $props();

	const submitUpdateSwMode: SubmitFunction = ({ action }) => {
		const value = action.searchParams.get('sw-mode') === 'true';
		swMode.isActive = value;
	};
</script>

<form
	in:fade={{ duration: 500, delay: 1500 }}
	method="POST"
	action="/?/setStarWarsMode&sw-mode={!swMode.isActive}"
	use:enhance={submitUpdateSwMode}
	class={clazz}
>
	<button type="submit" class="cursor-pointer" aria-label="Toggle star wars mode">
		<img src="/img/baby-yoda.png" alt="Baby Yoda" class="h-16" />
	</button>
</form>
