import evidencePreprocess from '@evidence-dev/preprocess'
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */

const config = {
	extensions: ['.svelte', ".md"],
	preprocess: evidencePreprocess(true), // Modify preprocess to allow for loading of $lib instead of package version of components library
	package: {
        dir: '../../packages/components',
        emitTypes: true
    },
    kit: {
		adapter: adapter(),
		files: {
			routes: 'src/pages',
			lib: 'src/components'
		}
	}
};

export default config;