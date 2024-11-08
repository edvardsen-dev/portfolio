import { onMount } from 'svelte';

type Options = {
	margin?: string;
	threshold?: number;
};

export function useTransitionIn(nodeF: () => HTMLElement | null, options?: Options) {
	let show = $state(false);

	onMount(() => {
		const finalOptions = {
			root: null,
			rootMargin: options?.margin || '0px',
			threshold: options?.threshold || 0.5
		};

		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					show = true;

					const node = nodeF();
					if (node) {
						observer.unobserve(node);
					}
				}
			});
		}, finalOptions);

		do {
			const node = nodeF();
			if (node) {
				observer.observe(node);
			}
		} while (nodeF() === null);
	});

	return {
		get show() {
			return show;
		}
	};
}
