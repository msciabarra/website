<script lang="ts">
	export let slug: string;
	export let title: string;
	export let date: string;
	export let authorName: string;
	export let authorImage: string;
	export let mainImage: string;
	export let topic: string;
	export let summary: string;
</script>

<div class="flex w-full flex-col bg-nuv-card-background shadow-nuv-card-box-shadow mb-[24px]">
	<img src={mainImage} alt={title} class="w-full" />
	<div class="flex flex-col p-4">
		<span class="uppercase font-semibold text-[14px] leading-[16px] text-nuv-orange">
			{topic}
		</span>
		<span class="text-nuv-blue text-[20px] leading-[23px] font-medium mt-[13px]">
			{title}
		</span>
		<span class="text-[14px] leading-[16px] font-normal mt-[10px]">
			{summary}
			<br /><br /><a href={'/blog' + `/${slug}`} class='text-nuv-orange'>Read more...</a>
		</span>
		<div class="mt-[30px] flex">
			<img src={authorImage} alt={authorName} class="w-[32px] h-[32px] rounded-[16px]" />
			<div class="flex flex-col ml-[10px] justify-center">
				<span class="text-[12px] leading-[14px] font-semibold">{authorName} </span>
				<span class="text-[#4D4D4D] text-[10px] leading-[12px] font-semibold">
					{date}
				</span>
			</div>
		</div>
	</div>
</div>
