// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

const ogUrl = 'https://r2.laughingzhu.cn/ec2bc53c8ee470916b97ae4a080a9e71-f90d65.webp'
const ogImageAlt = 'DevNow Doc OG Image';

// https://astro.build/config
export default defineConfig({
	site: 'https://doc.laughingzhu.cn/',
	integrations: [
		starlight({
			logo: {
				src: '/public/logo.png',
				alt: 'DevNow Logo',
			},
			title: 'DevNow Docs',
			social: {
				github: 'https://github.com/LaughingZhu/DevNow',
				telegram: 'https://t.me/devnow_tech',
			},
			components: {
				// 重写默认的 `SocialIcons` 组件。
				SocialIcons: './src/components/SocialIcons.astro',
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
					tag: 'script',
					attrs: {
						src: 'https://platform.twitter.com/widgets.js',
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
				{
					tag: 'meta',
					attrs: { property: 'canonical', content: 'http://localhost:4321/' },
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
					items: [
						{ label: '必看', slug: 'deploy' },
						{ label: 'Vercel 部署', slug: 'deploy/vercel' },
						{ label: 'CloudFlare 部署', slug: 'deploy/cloudflare' },
					],
				},
				{
					label: '扩展',
					autogenerate: { directory: 'extend', collapsed: true },
				}
			],
		}),
	],
});
