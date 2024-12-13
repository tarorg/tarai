import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: [
				'C:/Users/tarfr/Desktop/tar/tarai',
			],
		},
	}
});
