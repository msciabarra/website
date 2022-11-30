import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const postsModuleFiles = import.meta.glob('/src/content/blog/**/*.md');
	const postsMetadata = await Promise.all(
		Object.entries(postsModuleFiles).map(async ([path, content]) => {
			const slug = path
				.replace(/(\/index)?\.md/, '')
				.split('/')
				.pop();
			const { metadata } = await content();
			metadata.slug = slug;
			return {
				...metadata
			};
		})
	);

	return { posts: postsMetadata };
};
