import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	return {
		swMode: cookies.get('sw-mode') === 'true'
	};
};
