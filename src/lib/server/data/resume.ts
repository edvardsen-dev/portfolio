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
		date: {
			start: new Date('06-15-2024'),
			end: new Date('08-15-2024')
		},
		location: 'Oslo',
		description:
			'Developed an AI application that summarized news article published by DNB. The application used AWS services like Bedrock, Lambda, and DynamoDB. The frontend was developed using Next.js',
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
		date: {
			start: new Date('05-20-2022'),
			end: null
		},
		location: 'Ålesund',
		description:
			'As a summer intern, I assisted the insight team in developing data-driven reports. I continued working part-time during my studies, gaining valuable industry experience, collaborating with senior developers, and strengthening my technical and teamwork skills.',
		technologies: ['Vue', 'Tailwind CSS', 'GitLab']
	},
	{
		title: 'Goods Flow Co-worker',
		company: {
			name: 'Ikea'
		},
		date: {
			start: new Date('10-21-2019'),
			end: new Date('07-31-2020')
		},
		location: 'Trondheim',
		description:
			'Worked at Ikea Leangen as a logistics and customer relations employee. Was hired as a seasonal employee. I learned a lot about how a large store works in operation and how each individual can contribute to creating good customer experiences.'
	},
	{
		title: 'Part-time Salesman',
		company: {
			name: 'YX / 7-eleven'
		},
		date: {
			start: new Date('05-10-2018'),
			end: new Date('08-01-2019')
		},
		location: 'Vestby',
		description:
			'First started as a summer aid and received training in May. Then continued as extra help in the evenings and on weekends. I gained a lot of experience in the work environment, but also learned a lot about how to treat customers and how a store / kiosk is run. There was a lot varied work at the station, which meant that new problems constantly arose that had to be solved.'
	},
	{
		title: 'Supervisor at ASP (SFO)',
		company: {
			name: 'Vestby Ungdomsskole'
		},
		date: {
			start: new Date('03-30-2016'),
			end: new Date('05-03-2016')
		},
		location: 'Vestby',
		description:
			'In 10th grade as part of my optional subject (technology), one day a week for five weeks, we supervised children in coding. It was a great success as the children learnt a lot, had a tun of fun and was very interested throughout.'
	},
	{
		title: 'Working week at the Norwegian Military Media Center',
		company: {
			name: 'Norwegian Armed Forces'
		},
		date: {
			start: new Date('02-23-2015'),
			end: new Date('02-28-2015')
		},
		location: 'Oslo',
		description:
			"In 9th grade, we had a work week where we were to be deployed in a place where we wanted. I got the opportunity to work with the military's media center for a week. There I got to see how they worked and got to participate in various activities such as interviewing people on the street, see how their website was built and test out new cameras."
	}
] as const;

export const educations = [
	{
		title: 'Datateknologi',
		date: {
			start: new Date('08-21-2023'),
			end: null
		},
		location: 'NTNU, Trondheim',
		description: "Master's degree in data technology with focus on software systems"
	},
	{
		title: 'Computer science',
		date: {
			start: new Date('08-17-2020'),
			end: new Date('05-28-2023')
		},
		location: 'NTNU, Ålesund',
		description: "Bachelor's degree in computer science"
	},
	{
		title: 'Preperatory course for engineering',
		date: {
			start: new Date('08-19-2019'),
			end: new Date('06-05-2020')
		},
		location: 'NTNU, Trondheim',
		description: 'Mathematics and physics preperatory course for engineering'
	},
	{
		title: 'Highschool',
		date: {
			start: new Date('08-08-2016'),
			end: new Date('06-13-2019')
		},
		location: 'Drømtorp, Ski',
		description: 'Media and communication with German as third language'
	}
] as const;
