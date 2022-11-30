import * as path from 'path';
import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';

export const prerender = true;

const siteUrl = 'https://nuvolaris.io';
const pagesList = [
	'',
	'about',
	'blog',
	'company',
	'contact',
	'documentation',
	'download',
	'faq',
	'product',
	'resources'
];

const toXML = (pagesUrls: any) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
	xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
  xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:pagemap="http://www.google.com/schemas/sitemap-pagemap/1.0"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${pagesUrls
	.map(
		(pageUrl: string) => `
    <url>
	  <loc>${siteUrl}/${pageUrl}</loc>
	  <priority>1.0</priority>
	  <changefreq>monthly</changefreq>
	  <lastmod>${`${process.env.VITE_BUILD_TIME}`}</lastmod>
	</url>`
	)
	.join('\n')}
</urlset>`;

export const GET: RequestHandler = async ({ setHeaders }) => {
	try {
		setHeaders({
			'Cache-Control': 'max-age=0, s-max-age=600',
			'Content-Type': 'application/xml'
		});

		return new Response(toXML(pagesList));
	} catch (e: any) {
		console.error(`Error in sitemap.xml: ${e}`);
		throw error(500, e);
	}
};
