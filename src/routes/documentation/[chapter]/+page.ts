import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const file = await import(`./../../../content/documentation/${params.chapter}/index.md`);
	const { title } = file.metadata || {};
	const content = file?.default || {};

	return {
		content,
		title
	};
};
