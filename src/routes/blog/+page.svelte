<script lang="ts">
	import PostCard from '$lib/components/PostCard.svelte';

	const autorsImagesFiles = {
		'Michele Sciabarrà': import('$lib/assets/team/michele_sciabarra.png'),
		'Leonardo Cigolini Gulesu': import('$lib/assets/team/michele_sciabarra.png'),
		'Irina Branovic': import('$lib/assets/team/irina_branovic.png'),
		unknown: import('$lib/assets/team/placeholder-blog-author.png')
	};

	export let data: { posts: [any] };

	const getImages = async (post: any) =>
		(autorsImagesFiles[post.author] || autorsImagesFiles['unknown']).then(
			(authorImageFile) => authorImageFile.default
		);
</script>

<div class="bg-nuv-blue w-full h-[111px]" />
<div class="w-full">
	<div class="text-nuv-blue text-[48px] leading-[56px] mx-auto font-medium text-center mt-[35px]">
		Nuvolaris Blog
	</div>
	<div class="text-nuv-orange text-[24px] leading-[28px] mx-auto font-medium text-center">
		News & Insights from the cloud to you
	</div>
	<div class="mt-[67px] px-[98px]">
		<div class="flex flex-wrap">
			{#each data.posts as post}
				{#await getImages(post) then authorImage}
					<PostCard
						slug={post.slug}
						title={post.title}
						date={post.date}
						authorName={post.author}
						{authorImage}
						topic={post.topic}
						summary={post.summary}
					/>
				{/await}
			{/each}
		</div>
	</div>
</div>
