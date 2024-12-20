// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

const ogUrl = 'https://r2.laughingzhu.cn/ec2bc53c8ee470916b97ae4a080a9e71-f90d65.webp'
const ogImageAlt = 'DevNow Doc OG Image';

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
			
			head: [
				{
					tag: 'script',
					attrs: {
						src: 'https://cdn.usefathom.com/script.js',
						'data-site': 'EZBHTSIG',
						defer: true,
					},
				},
				{
					tag: 'meta',
					attrs: { property: 'og:image', content: ogUrl },
				},
				{
					tag: 'meta',
					attrs: { property: 'og:image:alt', content: ogImageAlt },
				},
			],

			favicon: '/public/favicon.svg',
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
					autogenerate: { directory: 'deploy',collapsed: true },
				},
				{
					label: '扩展',
					autogenerate: { directory: 'extend', collapsed: true },
				}
			],
		}),
	],
});
