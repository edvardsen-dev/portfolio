import { PUBLIC_CMS_BASE_PATH } from '$env/static/public';
import type { ProjectsResponse } from '$lib/dtos';
import { mapProjectsResponseToProject } from '$lib/mappers';
import type { Project } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	async function getProjects(): Promise<Project[]> {
		try {
			const res = await fetch(`${PUBLIC_CMS_BASE_PATH}/api/collections/projects/records`);
			const data = (await res.json()) as ProjectsResponse;

			return data.items.map(mapProjectsResponseToProject);
		} catch (err) {
			console.error(err);
			return [];
		}
	}

	return {
		projects: getProjects()
	};
};
