import { PUBLIC_CMS_BASE_PATH } from '$env/static/public';
import { tryCatch } from '$lib/utils';
import { error } from '@sveltejs/kit';
import type { Experience } from './types';
import type { ExperiencesResponse } from './dtos';
import { mapExperienceResponseToExperience } from './mappers';

type Fetch = typeof globalThis.fetch;

const ENDPOINT = `${PUBLIC_CMS_BASE_PATH}/api/collections/experiences/records`;

export async function getExperiences(fetch: Fetch): Promise<Experience[]> {
	const [fetchError, res] = await tryCatch(fetch(ENDPOINT));
	if (fetchError) {
		error(500, 'Failed to fetch educations');
	}

	const [parseError, data] = await tryCatch<ExperiencesResponse>(res.json());
	if (parseError) {
		error(res.status, 'Failed to parse educations response');
	}

	return data.items.map(mapExperienceResponseToExperience);
}
