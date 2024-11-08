import type { ProjectOverview } from '$lib/dtos';
import { projects } from '$lib/server/data/projects';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
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
