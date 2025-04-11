import { PUBLIC_CMS_BASE_PATH } from '$env/static/public';
import { tryCatch } from '$lib/utils';
import { error } from '@sveltejs/kit';
import type { Education } from './types';
import type { EducationsResponse } from './dtos';
import { mapEducationsResponseToEducation } from './mappers';

type Fetch = typeof globalThis.fetch;

const ENDPOINT = `${PUBLIC_CMS_BASE_PATH}/api/collections/educations/records`;

export async function getEducations(fetch: Fetch): Promise<Education[]> {
	const [fetchError, res] = await tryCatch(fetch(ENDPOINT));
	if (fetchError) {
		error(500, 'Failed to fetch educations');
	}

	const [parseError, data] = await tryCatch<EducationsResponse>(res.json());
	if (parseError) {
		error(res.status, 'Failed to parse educations response');
	}

	return data.items.map(mapEducationsResponseToEducation);
}
