<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';
	import FeatureItem from '$lib/components/FeatureItem.svelte';

	import NuvolarisHeroSvg from '$lib/components/NuvolarisHeroSvg.svelte';
	import VideoOverlay from '$lib/components/VideoOverlay.svelte';

	import documentationImg from '$lib/assets/landing-section-documentation.svg';
	import whatisImg from '$lib/assets/landing-section-whatis.svg';
	import pcImg from '$lib/assets/landing-section-pc.svg';

	import nodeIcon from '$lib/assets/icons/prog-langs/nodejs.svg';
	import pythonIcon from '$lib/assets/icons/prog-langs/python.svg';
	import dockerIcon from '$lib/assets/icons/prog-langs/docker.svg';
	import javaIcon from '$lib/assets/icons/prog-langs/java.svg';
	import goIcon from '$lib/assets/icons/prog-langs/go.svg';
	import phpIcon from '$lib/assets/icons/prog-langs/php.svg';
	import rubyIcon from '$lib/assets/icons/prog-langs/ruby.svg';
	import swiftIcon from '$lib/assets/icons/prog-langs/swift.svg';

	import feature1 from '$lib/assets/landing-feature-1.svg';
	import feature2 from '$lib/assets/landing-feature-2.svg';
	import featureCloud from '$lib/assets/landing-feature-cloud.svg';

	let isOpen = false;
	function handleOverlayOpen() {
		isOpen = !isOpen;
	}

	const items = [
		{
			imageSrc: feature1,
			imageAlt: 'Portability',
			title: 'Portability',
			text: "Don't want to end up in vendor lock-in with public cloud providers while moving to serverless? You are in the right place!"
		},
		{
			imageSrc: featureCloud,
			imageAlt: 'serverless on kubernetes',
			title: 'Serverless on Kubernetes',
			text: 'Nuvolaris is a serverless platform for Kubernetes. Forget about Kubernetes complexity and indulge in efortless development of cloud-native apps.'
		},
		{
			imageSrc: feature2,
			imageAlt: 'Scalability',
			title: 'Scalability',
			text: 'With Nuvolaris, you get the power of enterprise-ready serverless architecture at your fingertips. Try it out!'
		}
	];
</script>

{#if isOpen}
	<VideoOverlay on:overlayClose={handleOverlayOpen} />
{/if}

<section id="nuvolaris-hero" class="relative">
	<div class="absolute top-10 left-3 flex flex-col text-white w-1/2">
		<span class="uppercase leading-[23px] font-semibold text-[20px]"
			>speed-up cloud native development</span
		>
		<span class="leading-[18px] text-[15px] font-medium text-nuv-light-blue">Run everywhere</span>
	</div>
	<NuvolarisHeroSvg />
</section>

<section id="nuvolaris-buttons" class="relative h-[100px] top-[-23px]">
	<div class="absolute flex flex-col w-full items-center">
		<!-- <button
            class="w-[241px] h-[49px] bg-nuv-orange rounded-[20px] font-normal text-[24px] leading-[28px] text-white"
            >Sign Up</button
        > -->
		<button
			on:click|preventDefault={handleOverlayOpen}
			class="w-[241px] h-[38px] rounded-[20px] border border-black mt-[49px]"
			>Watch our video</button
		>
	</div>
</section>

<section id="nuvolaris-whatis" class="px-[18px] mb-[33px]">
	<div class="shadow-nuv-box-shadow bg-[#FAF4F4]/[.24] rounded-[20px] p-[17px] flex items-center">
		<img src={whatisImg} alt="whatisnuvolaris" class="w-[87px] h-[95px]" />
		<div class="flex flex-col pl-[10px]">
			<span class="text-nuv-blue text-[20px] leading-[23px] font-bold">What is nuvolaris?</span>
			<span class="font-normal text-[10px] leading-[12px]">
				Nuvolaris is an easy-to-use platform that helps software developers and companies deliver
				business value by creating and deploying portable serverless apps in any cloud.
			</span>
			<a
				href="/product"
				class="w-[117px] h-[29px] mt-[8px] self-center text-white bg-nuv-orange rounded-[20px] flex justify-center items-center"
			>
				<span class="font-normal text-[14px] leading-[16px]"> Learn more </span>
			</a>
		</div>
	</div>
</section>

<section id="nuvolaris-documentation" class="px-[18px] mb-[33px]">
	<div class="shadow-nuv-box-shadow bg-[#FAF4F4]/[.24] rounded-[20px] p-[17px] flex items-center">
		<img src={documentationImg} alt="whatisnuvolaris" class="w-[87px] h-[95px]" />
		<div class="flex flex-col pl-[10px]">
			<span class="text-nuv-blue text-[20px] leading-[23px] font-bold">Documentation</span>
			<span class="font-normal text-[10px] leading-[12px]">
				Nuvolaris is a distribution of Apache OpenWhisk that aims to be portable to every Kubernetes
				and to include a set of integrated services to make an awesome developer experiences.
			</span>
			<a
				href="/documentation"
				class="w-[117px] h-[29px] mt-[8px] self-center text-white bg-nuv-orange rounded-[20px] flex justify-center items-center"
			>
				<span class="font-normal text-[14px] leading-[16px]"> Learn more </span>
			</a>
		</div>
	</div>
</section>

<section id="nuvolaris-lowcodebuilder" class="px-[18px] mb-[33px]">
	<div class="shadow-nuv-box-shadow bg-[#FAF4F4]/[.24] rounded-[20px] p-[17px] flex items-center">
		<img src={pcImg} alt="lowcodebuilder" class="w-[87px] h-[95px]" />
		<div class="flex flex-col pl-[10px]">
			<span class="text-nuv-blue text-[20px] leading-[23px] font-bold">Low code Builder</span>
			<span class="font-normal text-[10px] leading-[12px]">
				Nuvolaris low-code builder allows the user to build a full-stack serverless application in a
				visual way, without actually writing code. Then, Nuvolaris developers would also be able to
				sell ready-made components on the Nuvolaris marketplace.
			</span>
			<a
				href="/resources"
				class="w-[117px] h-[29px] mt-[8px] self-center text-white bg-nuv-orange rounded-[20px] flex justify-center items-center"
			>
				<span class="font-normal text-[14px] leading-[16px]"> Learn more </span>
			</a>
		</div>
	</div>
</section>

<section id="nuvolaris-framework" class="flex mt-[77px] flex-col items-center">
	<span class="text-nuv-blue text-[16px] leading-[18px] font-semibold uppercase text-center">
		Nuvolaris is the final Serverless Framework
	</span>
	<span class="text-[#333030]/[.71] text-[12px] leading-[14px] font-medium mt-[9px]">
		PROGRAMMING LANGUAGES SUPPORTED
	</span>
	<div class="flex items-center mt-[14px]">
		<img src={nodeIcon} alt="nodejs" class="w-[70px]" />
		<img src={pythonIcon} alt="python" class="w-[104px]" />
		<img src={dockerIcon} alt="docker" class="w-[93px]" />
	</div>
	<div class="flex items-center">
		<img src={javaIcon} alt="java" class="mr-[15px] w-[62px]" />
		<img src={goIcon} alt="go" class="mr-[15px] w-[62px]" />
		<img src={phpIcon} alt="php" class="w-[60px]" />
		<img src={rubyIcon} alt="ruby" class="w-[82px]" />
		<img src={swiftIcon} alt="swift" class="w-[65px]" />
	</div>
	<span class="text-black text-[12px] leading-[14px] font-normal mb-[56px] mt-[18px] text-center"
		>Nuvolaris supports internal services Cache Redis, DB rqlite, Object Storage minio</span
	>
</section>

<div class="flex justify-center">
	<span class="text-nuv-blue text-[16px] leading-[18px] font-semibold">
		Features to quick-start your next project
	</span>
</div>

<section class="mt-[10px]">
	<Carousel numberOfItems={items.length} normConst={32}>
		{#each items as item}
			<FeatureItem {...item} />
		{/each}
	</Carousel>
</section>
