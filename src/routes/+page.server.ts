import type { ProjectOverview } from '$lib/dtos';
import { projects } from '$lib/server/data/projects';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies, setHeaders }) => {
	return {
		projects: projects
			.filter((p) => p.active)
			.map((p) => ({
				id: p.id,
				title: p.title,
				description: p.description,
				thumbnail: p.thumbnail,
				stack: p.stack,
				live: p.live
			})) as ProjectOverview[]
	};
};

export const actions: Actions = {
	setStarWarsMode: async ({ url, cookies }) => {
		const swMode = url.searchParams.get('sw-mode') === 'true';

		cookies.set('sw-mode', swMode ? 'true' : 'false', {
			path: '/',
			maxAge: 60 * 60 * 24 * 365
		});
	}
};
