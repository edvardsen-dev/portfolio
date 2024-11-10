import type { Project } from '$lib/types';

export const projects: Project[] = [
	{
		id: 0,
		order: 0,
		active: true,
		title: 'TF2DLE',
		description:
			'TF2DLE is a Wordle like game for the online game TF2. With daily challenges that reset every day, the players are tasked to find the correct answer for the different game modes in as few guesses as possible.',
		updatedAt: new Date('2024-11-11T12:23:00'),
		thumbnail: {
			name: 'home_screen.png',
			alt: 'Home Screen'
		},
		images: [
			{ name: 'home_screen.png', alt: 'Home screen' },
			{ name: 'weapon-game-mode.PNG', alt: 'Weapon game mode' },
			{ name: 'color-blind.PNG', alt: 'Color blind mode' },
			{ name: 'weapon-2.PNG', alt: 'Weapon 2 game mode' },
			{ name: 'weapon-2-complete.PNG', alt: 'Weapon 2 game mode completed' },
			{ name: 'map-game-mode.PNG', alt: 'Map game mode' },
			{ name: 'cosmetic-game-mode.PNG', alt: 'Cosmetic game mode' },
			{ name: 'unusual-game-mode.PNG', alt: 'Unusual game mode' }
		],
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
	},
	{
		id: 1,
		order: 1,
		active: true,
		title: 'Trace Voice Pick',
		description:
			"My bachelor's thesis was a group project where we developed an iOS app using SwiftUI to streamline product picking in warehouses. The app allowed employees to use both voice and touch interfaces for smoother operations. We also implemented a Spring Boot API to support a full warehouse management system.",
		updatedAt: new Date('2024-11-11T12:23:00'),
		thumbnail: {
			name: 'figma-sketches.PNG',
			alt: 'Figma sketches of the iOS application'
		},
		images: [
			{ name: 'figma-sketches.PNG', alt: 'Figma sketches of the iOS application' },
			{ name: 'managment-pages.PNG', alt: 'Wrehouse management pages' },
			{ name: 'profile-pages.PNG', alt: 'Profile pages' },
			{ name: 'mati-trucking.jpeg', alt: 'Mateusz driving a truck' },
			{ name: 'swift-page-diagram.png', alt: 'iOS application flow chart' }
		],
		stack: ['SwiftUI', 'Spring-Boot', 'Postgresql', 'Docker', 'Keycloak'],
		contributers: [
			{
				name: 'Joakim Edvardsen',
				href: 'https://github.com/jKm00'
			},
			{
				name: 'Petter Molnes',
				href: 'https://github.com/PMolnes'
			},
			{
				name: 'Mateusz Picheta',
				href: 'https://github.com/tama3ti'
			},
			{
				name: 'Håkon Sætre',
				href: 'https://github.com/Haukaun'
			}
		],
		features: [
			'User authentication',
			'Speech recognition',
			'Text to speech',
			'Touch and voice interface',
			'Warehouse management'
		],
		resources: [
			{
				label: 'Read our thesis at:',
				href: 'https://ntnuopen.ntnu.no/ntnu-xmlui/handle/11250/3076971'
			},
			{
				label: 'Swift frontend repository',
				href: 'https://gitlab.com/IDATA-2900-Group-1/voice-pick-frontend'
			},
			{
				label: 'Spring-Boot API repository',
				href: 'https://gitlab.com/IDATA-2900-Group-1/voice-pick-backend'
			},
			{
				label: 'YouTube video demonstration the application in action:',
				href: 'https://youtu.be/ldt2QxZ4jbU'
			}
		],
		live: null,
		content: [
			{
				title: 'Introduction',
				text: [
					'In my bachelor thesis, our team focused on developing a comprehensive solution to enhance the productivity of employees in warehouses. These employees are responsible for plucking products from shelves and loading them onto pallets before shipping them to local grocery stores. Currently, they rely solely on a voice-based system, where they communicate through voice commands. However, we aimed to revolutionize this process by creating a mobile application that combines both voice and touch interfaces. This empowers employees to choose the interface that best suits their needs, ensuring a more efficient workflow. While the voice interface offers hands-free operation for driving trucks and plucking products, the touch interface accelerates more complex actions.'
				]
			},
			{
				title: 'Results',
				text: [
					'Our final product was an iOS application that can be easily downloaded by anyone. The application provides users with the ability to create their own accounts and configure their warehouses with specific locations, products, and employees. Furthermore, we implemented an invitations feature, enabling warehouse leaders to invite other users to join their warehouses. This functionality fosters collaboration and streamlines communication within and across warehouses. Overall, the project was a resounding success, meeting and exceeding the requirements and requests of our employees.'
				]
			},
			{
				title: 'Thoughts and Reflections',
				text: [
					'Throughout the development process, our team gained valuable insights and knowledge. We encountered various challenges and learned to navigate them effectively. By working on this project, we honed our skills in iOS application development using SwiftUI, as well as in designing and implementing a robust Spring Boot API to support the warehouse management system. Additionally, we gained a deeper understanding of the user experience and the importance of providing flexible interface options to cater to diverse user preferences and workflows.',
					'The bachelor thesis project not only allowed us to showcase our technical capabilities but also highlighted our ability to understand and address the needs of end-users. By actively involving employees and incorporating their feedback, we ensured that the final product aligned with their requirements and expectations. This experience further solidified our passion for software development and reinforced the value of creating user-centered solutions.'
				]
			},
			{
				title: 'Conclusion',
				text: [
					'Overall, our bachelor thesis project was a significant achievement, both in terms of technical implementation and fulfilling the needs of warehouse employees. We are proud of the final product we delivered and the knowledge we acquired throughout the process, paving the way for future opportunities in the field of software development.'
				]
			}
		]
	}
] as const;
