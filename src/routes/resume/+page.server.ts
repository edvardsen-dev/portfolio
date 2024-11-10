import type { PageServerLoad } from './$types';
import { experiences, educations } from '$lib/server/data/resume';

export const load: PageServerLoad = async () => {
	return {
		experiences: experiences,
		educations: educations
	};
};
