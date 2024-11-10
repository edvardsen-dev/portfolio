import { projects } from '$lib/server/data/projects';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, setHeaders }) => {
	const id = params.id as string;

	const project = projects.find((project) => project.id === Number(id));

	if (!project) {
		error(404, 'Project not found');
	}

	return {
		project
	};
};
