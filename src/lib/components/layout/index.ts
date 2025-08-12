import {
	Home,
	Info,
	FolderCode,
	ScrollText,
	Gamepad,
	Github,
	Codepen,
	Linkedin,
	Instagram,
	Mail,
	Phone,
	Pin
} from 'lucide-svelte';

export const links = [
	{ name: 'Home', href: '/', icon: Home },
	{ name: 'Experience', href: '/#experience', icon: Info },
	{ name: 'Projects', href: '/#projects', icon: FolderCode },
	{ name: 'Resume', href: '/resume', icon: ScrollText }
	// { name: 'Quiz', href: '/quiz', icon: Gamepad }
];

export const contacts = [
	{
		name: 'Email',
		value: 'joakimedvardsen2000@gmail.com',
		href: 'mailto:joakimedvardsen2000@gmail.com',
		icon: Mail
	},
	{ name: 'Phone', value: '+47 901 59 363', href: 'tel:901-59-363', icon: Phone },
	{
		name: 'Location',
		value: 'Oslo, Norway',
		href: 'https://maps.app.goo.gl/YourOsloMapLink',
		icon: Pin
	}
];

export const socials = [
	{ name: 'GitHub', href: 'https://github.com/jKm00', icon: Github },
	{ name: 'Codepen', href: 'https://codepen.io/Jaakim', icon: Codepen },
	{
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/in/joakim-edvardsen-665043220/',
		icon: Linkedin
	},
	{ name: 'Instagram', href: 'https://www.instagram.com/joakim_edvardsen/', icon: Instagram }
];
