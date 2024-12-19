// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

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
					label: '简介',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '为什么', slug: 'guides/why' },
						{ label: '有哪些特性', slug: 'guides/feature' },
					],
				},
				{
					label: '指南',
					autogenerate: { directory: 'reference' },
				},
				{
					label: '功能',
					autogenerate: { directory: 'feature' },
				},
				{
					label: '部署',
					autogenerate: { directory: 'deploy' },
				},
				{
					label: '扩展',
					autogenerate: { directory: 'extend' },
				}
			],
		}),
	],
});
