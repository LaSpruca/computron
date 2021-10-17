import type { RequestHandler } from '@sveltejs/kit';
import * as fs from 'fs';

export const get: RequestHandler = async () => {
	let tutorials = await Promise.all(
		Object.entries(import.meta.glob('./*.md')).map(async ([path, page]) => {
			const metadata = await page();
			const slug = path.split('/').pop().split('.').shift();
			return { ...metadata['metadata'], slug };
		})
	);

	console.log(tutorials);

	return {
		body: tutorials
	};
};
