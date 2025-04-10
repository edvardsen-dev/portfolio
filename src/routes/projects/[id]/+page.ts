import { getProject } from '$lib/features/projects/api';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	return {
		project: await getProject(fetch, params.id)
	};
};
