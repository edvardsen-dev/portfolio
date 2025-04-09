import type { Project } from './types';

export type ProjectOverview = Pick<
	Project,
	'id' | 'title' | 'description' | 'thumbnail' | 'stack' | 'live' | 'imgBasePath'
>;

export type AllProjectResponse = {
	page: number;
	perPage: number;
	totalItems: number;
	totalPages: number;
	items: Project[]
}
