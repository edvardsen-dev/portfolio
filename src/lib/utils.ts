import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function toHumanDate(date: Date) {
	return date.toLocaleDateString('en-UK', { month: 'long', year: 'numeric', day: 'numeric' });
}

export function toHumanDateTime(date: Date) {
	return date.toLocaleDateString('en-UK', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit'
	});
}

export async function tryCatch<T>(promise: Promise<T>): Promise<[undefined, T] | [Error]> {
	return promise
		.then((data) => {
			return [undefined, data] as [undefined, T];
		})
		.catch((error) => {
			return [error];
		});
}
