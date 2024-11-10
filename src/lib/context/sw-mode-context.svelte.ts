import { browser } from '$app/environment';
import { getContext, setContext } from 'svelte';

function swModeState(init: boolean) {
	let isActive = $state(init);

	return {
		get isActive() {
			return isActive;
		},
		set isActive(value: boolean) {
			isActive = value;
			if (browser) {
				document.documentElement.classList.toggle('sw-mode', value);
			}
		}
	};
}

const SW_MODE_CTX = Symbol('SW_MODE_CTX');

export function setSwMode(init: boolean) {
	const swMode = swModeState(init);
	setContext(SW_MODE_CTX, swMode);
	return swMode;
}

export function getSwMode() {
	return getContext<{ isActive: boolean }>(SW_MODE_CTX);
}
