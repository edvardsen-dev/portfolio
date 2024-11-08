import type { Project } from '$lib/types';

export const projects: Project[] = [
	{
		id: 0,
		order: 0,
		active: true,
		title: 'TF2DLE',
		description:
			'TF2DLE is a Wordle like game for the online game TF2. With daily challenges that reset every day, the players are tasked to find the correct answer for the different game modes in as few guesses as possible.',
		thumbnail: {
			name: 'home_screen.png',
			alt: 'Home Screen'
		},
		images: [{ name: '', alt: '' }],
		stack: ['Sveltekit', 'Postgresql', 'Prisma', 'Shadcn', 'Tailwindcss'],
		contributers: [{ name: 'Joakim Edvardsen', href: 'https://github.com/jKm00' }],
		features: [
			'Game modes',
			'Daily challenges',
			'Scoreboard',
			'Social media sharing',
			'Color blind mode'
		],
		resources: [
			{ label: 'Live website', href: 'https://tf2dle.com' },
			{ label: 'Repository', href: 'https://github.com/edvardsen-dev/tf2dle' }
		],
		live: 'https://tf2dle.com',
		content: [
			{
				title: 'What is TF2DLE?',
				text: [
					'Wordle is a game that has been around for quite some time and different variations of the game have been made like Loldle. TF2DLE is heavily inspired by these games with different game modes and challenges that reset every day.',
					'TF2DLE currently has three different game modes; weapon, map, and cosmetic. In each category the player has to guess todays selected item in as few guesses as possible. The different game modes provide different hints to help the player guess the correct answer. The weapon game mode is more like the traditional Wordle game with color-coded hints. Because of the color hints, a color blind mode is available to help people with impeared vision. The map game mode provides a zoomed in image of the map that zooms out a small amount for each guess. The cosmetic game mode provides three levels of hints (rotation, color, and class) each unlocking after a certain number of guesses.',
					'TF2DLE is meant to be a fun little game that you can use to take a break from your daily tasks. Additionally, you can show your knowledge of the game, bragging to Twitter when you make a good run by utilizing the social media sharing feature.'
				]
			},
			{
				title: 'Built with',
				text: [
					'The application is built with Sveltekit and uses Prisma as an ORM to interact with the Postgres database. The UI is built with Shadcn and Tailwind. Finally it all comes together by being hosted on Vercel for a fast and reliable development experience with CI/CD pipelines.'
				]
			}
		]
	}
] as const;
