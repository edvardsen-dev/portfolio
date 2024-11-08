import type { Experience } from '$lib/types';

export const experiences: Experience[] = [
	{
		title: 'Summer Intern',
		company: {
			name: 'DNB',
			logo: 'dnb.png',
			href: 'https://www.dnb.no/',
			bg: 'bg-teal-400/20'
		},
		location: 'Oslo, Norway',
		date: {
			start: new Date('2024-06-15'),
			end: new Date('2024-08-15')
		},
		description: 'Developed an AI application that summarized news article published by DNB. ',
		technologies: ['Next.js', 'Tailwind CSS', 'AWS', 'Python', 'GitLab']
	},
	{
		title: 'Part Time Software Developer',
		company: {
			name: 'Solwr',
			logo: 'solwr.jpeg',
			href: 'https://solwr.com/',
			bg: 'bg-yellow-400/20'
		},
		location: 'Ålesund, Norway',
		date: {
			start: new Date('2022-05-20'),
			end: null
		},
		description:
			'Started as a summer intern, developing a web application to visualize customer data. Continued working part-time during my studies.',
		technologies: ['Vue', 'Tailwind CSS', 'GitLab']
	}
] as const;
