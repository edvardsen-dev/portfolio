export type Project = {
	id: number;
	order: number;
	active: boolean;
	title: string;
	description: string;
	thumbnail: Image;
	images: Image[];
	stack: string[];
	contributers: {
		name: string;
		href: string;
	}[];
	features: string[];
	resources: {
		label: string;
		href: string;
	}[];
	live: string | null;
	content: {
		title?: string;
		text: string[];
	}[];
};

type Image = {
	name: string;
	alt: string;
};

export type Experience = {
	title: string;
	company: {
		name: string;
		logo: string;
		href: string;
		bg: string;
	};
	location: string;
	date: {
		start: Date | null;
		end: Date | null;
	};
	description: string;
	technologies: string[];
};
