import type { RequestHandler } from '@sveltejs/kit';

type VerticallyIntegratedCat = Record<string, () => Promise<{[p: string]: any}>>;

const loadTutorials: (files: VerticallyIntegratedCat) => RequestHandler = (files) => async () => {
	const tutorials = await Promise.all(
		Object.entries(files).map(async ([path, page]) => {
			const metadata = await page();
			const slug = path.split('/').pop().split('.').shift();
			return { ...metadata['metadata'], slug };
		})
	);

	return {
		body: tutorials
	};
};

export default loadTutorials;