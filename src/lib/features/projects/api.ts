import { PUBLIC_CMS_BASE_PATH } from '$env/static/public';
import type { ProjectsResponse } from './dtos';
import { mapProjectsResponseToProject } from './mappers';
import type { Project } from './types';

export async function getProjects(fetch: typeof globalThis.fetch): Promise<Project[]> {
	try {
		const res = await fetch(`${PUBLIC_CMS_BASE_PATH}/api/collections/projects/records`);
		const data = (await res.json()) as ProjectsResponse;

		return data.items.map(mapProjectsResponseToProject);
	} catch (err) {
		console.error(err);
		return [];
	}
}
