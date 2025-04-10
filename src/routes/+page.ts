import { getProjects } from '$lib/features/projects/api';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	return {
		projects: getProjects(fetch)
	};
};
