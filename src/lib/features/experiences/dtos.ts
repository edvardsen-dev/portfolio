import type { ListResponse } from '$lib/dtos';

export type ExperienceResponse = {
	id: string;
	disabled?: boolean;
	created: string;
	updated: string;
	collectionId: string;
	collectionName: string;
	title: string;
	location: string;
	start: string;
	end: string;
	technologies: string[] | null;
	description: string;
	company_name: string;
	company_logo: string;
	compaony_link: string;
	company_color: string;
};

export type ExperiencesResponse = ListResponse & {
	items: ExperienceResponse[];
};
