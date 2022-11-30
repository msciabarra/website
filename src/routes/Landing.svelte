<script lang="ts">
	import NuvolarisHeroSvg from '$lib/components/NuvolarisHeroSvg.svelte';
	import ThreeDots from '$lib/components/ThreeDots.svelte';
	import OrangeCloud from '$lib/components/OrangeCloud.svelte';

	import { createEventDispatcher } from 'svelte';
	import VideoOverlay from '$lib/components/VideoOverlay.svelte';
	import whatisImg from '$lib/assets/landing-section-whatis.svg';
	import documentationImg from '$lib/assets/landing-section-documentation.svg';
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

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('message', { text: 'cmd:99' });
	}

	let isOpen = false;
	function handleOverlayOpen() {
		isOpen = !isOpen;
	}
</script>

{#if isOpen}
	<VideoOverlay on:overlayClose={handleOverlayOpen} />
{/if}
<section id="nuvolaris-hero" class="relative">
	<div class="absolute top-1/4 left-[66px] flex flex-col text-white w-1/2">
		<span class="uppercase leading-[56px] font-semibold text-[48px]"
			>speed-up cloud native development</span
		>
		<span class="leading-[56px] text-[48px] font-medium text-nuv-light-blue">Run everywhere</span>

		<div class="relative flex flex-col w-fit mt-[61px] left-[88px]">
			<!-- <button
                class="w-[241px] h-[49px] bg-nuv-orange rounded-[20px] font-normal text-[24px] leading-[28px]"
                >Sign Up</button
            > -->
			<button
				on:click|preventDefault={handleOverlayOpen}
				class="w-[241px] h-[38px] rounded-[20px] border border-white mt-[10px]"
				>Watch our video</button
			>
		</div>
	</div>
	<NuvolarisHeroSvg />
</section>
<section id="what-is-nuvolaris" class="flex mt-[128px] justify-center">
	<div class="flex flex-col pr-[69px] justify-center items-center">
		<span class="text-nuv-blue text-[48px] leading-[56px] font-bold">What is Nuvolaris?</span>
		<span class="mt-[23px] font-normal text-[14px] leading-[16px] w-[480px]">
			We are developers, building tools for other fellow developers to easily run apps in any cloud. <br
			/> Nuvolaris is an easy-to-use platform that helps software developers and companies deliver business
			value by creating and deploying portable serverless apps in any cloud.
		</span>
		<a
			href="/product"
			class="w-[284px] h-[49px] mt-[68px] text-white bg-nuv-light-orange rounded-[20px] flex justify-center items-center"
		>
			<span class="font-normal text-[24px] leading-[28px] capitalize"> learn more </span>
		</a>
	</div>
	<div class="relative">
		<div class="absolute left-[208px]">
			<OrangeCloud />
		</div>
		<img src={whatisImg} alt="whatisnuvolaris" class="w-[375px] h-[375px]" />
	</div>
</section>

<section id="documentation" class="flex mt-[128px] justify-center">
	<div class="relative">
		<div class="absolute right-[188px] top-[32px]">
			<OrangeCloud />
		</div>
		<img src={documentationImg} alt="documentation" class="w-[427px] h-[364px] ml-[148px]" />
	</div>
	<div class="flex flex-col pl-[100px]">
		<span class="text-nuv-blue text-[48px] leading-[56px] font-bold"> Documentation </span>
		<span class="mt-[15px] font-normal text-[14px] leading-[16px] w-[480px]">
			Nuvolaris is a distribution of Apache OpenWhisk that aims to be portable to every Kubernetes
			and to include a set of integrated services to make an awesome developer experiences.
		</span>
		<a
			href="/documentation"
			class="w-[284px] h-[49px] mt-[36px] mr-[100px] self-center text-white bg-nuv-light-orange rounded-[20px] flex justify-center items-center"
		>
			<span class="font-normal text-[24px] leading-[28px] capitalize"> learn more </span>
		</a>
	</div>
</section>

<section id="low-code-builder" class="flex mt-[99px] mb-[139px] justify-center">
	<div class="flex flex-col justify-center">
		<span class="text-nuv-blue text-[48px] leading-[56px] font-bold"> Low Code Builder </span>
		<span class="mt-[15px] font-normal text-[14px] leading-[16px] w-[480px]">
			Nuvolaris low-code builder allows the user to build a full-stack serverless application in a
			visual way, without actually writing code. Then, Nuvolaris developers would also be able to
			sell ready-made components on the Nuvolaris marketplace.
		</span>
		<a
			href="/resources"
			class="w-[284px] h-[49px] mt-[36px] mr-[100px] self-center text-white bg-nuv-light-orange rounded-[20px] flex justify-center items-center"
		>
			<span class="font-normal text-[24px] leading-[28px] capitalize"> learn more </span>
		</a>
	</div>
	<div class="relative">
		<div class="absolute left-[267px] bottom-0">
			<OrangeCloud />
		</div>
		<img src={pcImg} alt="low code builder" class="w-[494px] h-[364px]" />
	</div>
</section>

<ThreeDots />

<section id="nuvolaris-framework" class="flex mt-4 flex-col items-center">
	<span class="text-nuv-blue text-[40px] leading-[46px] font-semibold">
		Nuvolaris is the final Serverless Framework
	</span>
	<span class="text-[#333030]/[.71] text-[24px] leading-[28px] font-medium">
		PROGRAMMING LANGUAGES SUPPORTED
	</span>
	<div class="mt-4 p-4 w-1/2 flex justify-around">
		<img src={nodeIcon} alt="nodejs" width="120" height="80" />
		<img src={pythonIcon} alt="python" width="140" height="80" />
		<img src={dockerIcon} alt="docker" width="140" height="80" />
	</div>
	<div class="p-4 w-1/2 flex justify-around">
		<img src={javaIcon} alt="java" width="120" height="80" />
		<img src={goIcon} alt="go" width="100" height="80" />
		<img src={phpIcon} alt="php" width="80" height="80" />
		<img src={rubyIcon} alt="ruby" width="100" height="80" />
		<img src={swiftIcon} alt="swift" width="120" height="80" />
	</div>
	<span class="text-black text-[24px] leading-[28px] font-normal mb-[57px] mt-[49px]"
		>Nuvolaris supports internal services Cache Redis, DB rqlite, Object Storage minio</span
	>
</section>

<ThreeDots />

<section id="nuvolaris-features" class="flex mt-[57px] mb-[178px] flex-col items-center">
	<span class="text-nuv-blue text-[40px] leading-[46px] font-semibold">
		Features to quick-start your next project
	</span>
	<div class="flex mt-[33px] items-center">
		<div
			class="flex flex-col items-center w-[333px] h-[429px] shadow-nuv-box-shadow rounded-[20px] p-[32px]"
		>
			<img src={feature1} alt="feature" class="w-[197px]" />
			<span class="text-nuv-blue text-[40px] leading-[46px] font-semibold mt-[45px]">
				Portability
			</span>
			<div class="text-[14px] leading-[16px] font-semibold self-end mt-auto">
				Don't want to end up in vendor lock-in with public cloud providers while moving to
				serverless? You are in the right place!
			</div>
		</div>
		<div
			class="flex flex-col items-center w-[430px] h-[540px] shadow-nuv-box-shadow rounded-[20px] p-[32px] pt-0 mx-[15px]"
		>
			<img src={featureCloud} alt="feature" class="w-[366px] h-[309px]" />
			<span class="text-nuv-blue text-[40px] leading-[46px] font-semibold text-center">
				Serverless on Kubernetes
			</span>
			<span class="text-[14px] leading-[16px] font-semibold mt-[20px]">
				Nuvolaris is a serverless platform for Kubernetes. Forget about Kubernetes complexity and
				indulge in efortless development of cloud-native apps.
			</span>
		</div>
		<div
			class="flex flex-col items-center w-[333px] h-[429px] shadow-nuv-box-shadow rounded-[20px] p-[32px] pt-[32px]"
		>
			<img src={feature2} alt="feature" class="h-[177px]" />
			<span class="text-nuv-blue text-[40px] leading-[46px] font-semibold mt-[45px]">
				Scalability
			</span>
			<span class="text-[14px] leading-[16px] font-semibold mt-auto">
				With Nuvolaris, you get the power of enterprise-ready serverless architecture at your
				fingertips. Try it out!
			</span>
		</div>
	</div>
</section>
