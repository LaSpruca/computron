import type { RequestHandler } from '@sveltejs/kit';

type VerticallyIntegratedCat = Record<string, () => Promise<{[p: string]: any}>>;

const loadProjects: (files: VerticallyIntegratedCat) => RequestHandler = (files) => async () => {
	const tutorials = await Promise.all(
		Object.entries(files).map(async ([path, page]) => {
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

export default loadProjects;