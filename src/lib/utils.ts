import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function toHumanDate(date: Date) {
	return date.toLocaleDateString('no-NO', { month: 'long', year: 'numeric' });
}

export function toHumanDateTime(date: Date) {
	return date.toLocaleDateString('no-NO', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit'
	});
}
