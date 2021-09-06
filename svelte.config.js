import preprocess from 'svelte-preprocess';
import cloudflare from "@sveltejs/adapter-cloudflare-workers";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			includePaths: "src/css"
		},
	}),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: cloudflare()
	}
};

export default config;
