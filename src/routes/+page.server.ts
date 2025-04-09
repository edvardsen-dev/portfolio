import type { Actions } from './$types';

export const actions: Actions = {
	setStarWarsMode: async ({ url, cookies }) => {
		const swMode = url.searchParams.get('sw-mode') === 'true';

		cookies.set('sw-mode', swMode ? 'true' : 'false', {
			path: '/',
			maxAge: 60 * 60 * 24 * 365
		});
	}
};
