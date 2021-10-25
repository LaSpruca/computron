import type { RequestHandler } from '@sveltejs/kit';

/// The result of an import.meta.glob
type VerticallyIntegratedCat = Record<string, () => Promise<{[p: string]: any}>>;

/// Loads a set of tutorials, taking an import.meta.glob() as the argument, the returning a function to retrieve the metadata of the tutorials
const loadTutorials: (files: VerticallyIntegratedCat) => RequestHandler = (files) => async () => {
	const tutorials = await Promise.all(
		// Iterate over all the files
		Object.entries(files).map(async ([path, page]) => {
			// Get the metadata of the page
			const metadata = await page();
			// Get the slug of the tutorial
			const slug = path.split('/').pop().split('.').shift();
			// Return an object containg the information
			return { ...metadata['metadata'], slug };
		})
	);

	return {
		body: tutorials
	};
};

export default loadTutorials;