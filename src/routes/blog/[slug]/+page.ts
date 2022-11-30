import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const { slug } = params;
	const post = await import('./../../../content/blog' + `/${slug}/index.md`);
	const { title, date } = post.metadata;
	const content = post.default;
	return {
		content,
		title,
		date
	};
};
