export type Experience = {
	title: string;
	company: {
		name: string;
		logo?: string;
		href?: string;
		bg?: string;
	};
	location: string;
	date: {
		start: Date | null;
		end: Date | null;
	};
	description: string;
	technologies?: string[];
};

export type Education = {
	title: string;
	date: {
		start: Date | null;
		end: Date | null;
	};
	location: string;
	description: string;
};
