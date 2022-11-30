import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = ({ setHeaders }) => {
	const manifest = {
		name: 'Nuvolaris.io',
		short_name: 'Nuvolaris - Join the serverless revolution!',
		description:
			'Super fast native cloud development, deploy on any cloud. Code in your favourite language, deploy on any clound with one simple command form your terminal.',
		start_url: '/',
		background_color: 'white',
		theme_color: 'blue-white-orange',
		display: 'standalone',
		icons: [{ src: '/favicon.png', type: 'image/png', sizes: '180x180' }]
	};

	setHeaders({
		'content-type': 'application/json'
	});

	return json(manifest);
};
