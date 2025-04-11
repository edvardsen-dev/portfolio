import { getEducations } from '$lib/features/educations/api';
import { getExperiences } from '$lib/features/experiences/api';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	return {
		experiences: await getExperiences(fetch),
		educations: await getEducations(fetch)
	};
};
