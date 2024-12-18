// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			logo: {
				src: './public/logo.webp',
				alt: 'DevNow Logo',
			},
			title: 'DevNow Docs',
			social: {
				github: 'https://github.com/LaughingZhu/DevNow',
			},
			sidebar: [
				{
					label: '引导',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
						{ label : '为什么是 DevNow', slug: 'guides/why'}
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
