import { browser } from '$app/environment';

function useSwMode() {
	let isActive = $state(false);

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

export const swMode = useSwMode();
