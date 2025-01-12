// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://doc.laughingzhu.cn/',
	integrations: [
		starlight({
			logo: {
				src: './public/logo.png',
				alt: 'DevNow Logo',
			},
			title: 'DevNow Docs',
			favicon: './public/logo.png',
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
