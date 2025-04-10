import { PUBLIC_CMS_BASE_PATH } from '$env/static/public';
import { tryCatch } from '$lib/utils';
import { error } from '@sveltejs/kit';
import type { ProjectsResponse } from './dtos';
import { mapProjectsResponseToProject } from './mappers';
import type { Project } from './types';

type Fetch = typeof globalThis.fetch;

const ENDPOINT = `${PUBLIC_CMS_BASE_PATH}/api/collections/projects/records`;

export async function getProjects(fetch: Fetch): Promise<Project[]> {
	const [fetchError, res] = await tryCatch(fetch(ENDPOINT));
	if (fetchError) {
		error(500, 'Failed to fetch projects');
	}

	const [parseError, data] = await tryCatch<ProjectsResponse>(res.json());
	if (parseError) {
		error(res.status, 'Failed to parse projects response');
	}

	return data.items.map(mapProjectsResponseToProject);
}

export async function getProject(fetch: Fetch, id: string): Promise<Project> {
	const [fetchError, res] = await tryCatch(fetch(`${ENDPOINT}/${id}`));
	if (fetchError) {
		error(500, 'Failed to fetch project');
	}
	if (res.status !== 200) {
		error(res.status, 'Failed to fetch project');
	}

	const [parseError, data] = await tryCatch(res.json());
	if (parseError) {
		error(res.status, 'Failed to parse project response');
	}

	return mapProjectsResponseToProject(data);
}
