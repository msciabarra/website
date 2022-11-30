<script lang="ts">
	import linkedinBlack from '$lib/assets/social-media-logos/LinkedinLogoBlack.svg';
	export let src;
	export let alt;
	export let name;
	export let title;
	export let linkedinLink;
</script>

<div class="flex flex-col my-[18px] w-[240px] mx-[18px]">
	<div class="rounded-[93px] overflow-hidden w-fit self-center bg-[#D9D9D9]">
		<img {src} {alt} class="w-[186px] h-[186px] object-cover" />
	</div>
	<span class="mt-[28px] text-[24px] leading-[28px] font-medium uppercase">
		{name}
	</span>
	<span class="font-normal text-[14px] leading-[16px]">{title}</span>
	<a href={linkedinLink}>
		<img src={linkedinBlack} alt="LinkedIn link" class="w-[32px] mt-[14px]" />
	</a>
</div>
