import type { Project } from './types';

export type ProjectOverview = Pick<
	Project,
	'id' | 'title' | 'description' | 'thumbnail' | 'stack' | 'live' | 'imgBasePath'
>;
