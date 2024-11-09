import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	const swMode = event.cookies.get('sw-mode') === 'true';

	if (swMode) {
		return await resolve(event, {
			transformPageChunk: ({ html }) =>
				html.replace('class="scroll-smooth"', `class="scroll-smooth sw-mode"`)
		});
	}

	return await resolve(event);
}) satisfies Handle;
