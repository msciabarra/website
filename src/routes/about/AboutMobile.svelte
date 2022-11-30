<script>
	import Carousel from '$lib/components/Carousel.svelte';
	import TeamItem from '$lib/components/TeamItem.svelte';
	import michele from '$lib/assets/team/msciab.jpg';
	import mirella from '$lib/assets/team/mirella.webp';
	import irina from '$lib/assets/team/irina.png';
	import nuvAbout from '$lib/assets/nuvolaris-about-illustration.svg';

	let team = [
		{
			src: michele,
			alt: 'Michele Sciabara',
			name: 'Michele Sciabara',
			title: 'Founder and CEO',
			linkedinLink: 'https://www.linkedin.com/in/msciab/'
		},
		{
			src: irina,
			alt: 'Irina Branovic',
			name: 'Irina Branovic',
			title: 'Founder and CTO',
			linkedinLink: 'https://www.linkedin.com/in/irinabranovic/'
		},
		{
			src: mirella,
			alt: 'Mirella Di Girolamo',
			name: 'Mirella Di Girolamo',
			title: 'Founder and CFO',
			linkedinLink: 'https://www.linkedin.com/in/mdigirolamo/'
		}
	];
</script>

<div id="mobile-page-layout" class="pb-[15px]">
	<div class="bg-nuv-blue h-[214px] w-full px-[41px] flex justify-center">
		<div
			class="relative top-[21px] bg-white shadow-nuv-box-shadow w-full h-fit flex flex-col items-center pb-[20px]"
		>
			<img src={nuvAbout} alt="feature" class="w-[255px] h-[221px]" />
			<span class="text-nuv-blue text-[24px] leading-[28px] font-bold mt-[19px]">Our Story</span>
		</div>
	</div>
	<div class="mt-[110px] text-[14px] leading-[16px] font-normal px-[56px] mb-[30px]">
		Everything started when Michele Sciabarrà, our CEO, was looking for an open source product
		implementing some of the features of Amazon Lambda for Kubernetes, and stumbled upon Apache
		OpenWhisk. After trying it out on a Windows machine, he found a small issue and quickly fixed
		it. <br /> <br />

		But instead of throwing it away, he contributed the fix to the project. The fix was quickly
		approved, which was a motivation to contribute more to the project. <br /> <br />

		Michele soon joined the project as an active contributor, by first implementing a runtime for
		the Go programming language, that turned out to be very fast. It was later used as a basis for
		the PHP runtime, following with Python, Ruby, Java, Rust and Deno runtimes. <br /> <br />

		Michele later joined the OpenWhisk project in the Project Management Committee. <br /> <br />

		Some of the founders of the OpenWhisk project left IBM to create a startup, Nimbella, focused on
		moving forward the OpenWhisk project and building "a beautiful cloud". <br /> <br />

		Michele joined Nimbella six months after its foundation as one of the first employees, and
		worked at the beginning as a core platform developer, then moved into business managing
		operations in Europe, as Nimbella Europe Manager. <br /> <br />

		Nimbella was acquired by Digital Ocean in September 2021, when Michele became Senior Developer
		Advocate. But the business operations started in Europe made it clear that there exists a market
		for business operations which Nimbella as a division of Digital Ocean can not cover. Michele
		decided to leave and founded Nuvolaris. <br /> <br />

		So now we are in this together at Nuvolaris, the company whose name comes from italian word for
		cloud (nuvola).
	</div>
	<span class="text-nuv-blue text-[24px] leading-[28px] font-bold ml-[51px]"> Team </span>
	<div class="md:hidden">
		<Carousel numberOfItems={team.length} normConst={18}>
			{#each team as member}
				<TeamItem {...member} />
			{/each}
		</Carousel>
	</div>
	<div class="bg-nuv-download-gray/[.11] mt-[70px] pt-[26px] pb-[16px]">
		<span class="text-nuv-blue text-[24px] leading-[28px] font-bold ml-[30px]"> Download </span>

		<div class="text-[14px] leading-[16px] font-normal px-[20px] mt-[14px]">
			Nuvolaris is an easy-to-use platform that helps software developers and companies deliver
			business value by creating and deploying portable serverless apps in any cloud. <br /> <br />

			Nuvolaris is created with the aim to become the ultimate platform for developers adopting a
			serverless computing model. It builds upon proven enterprise-grade open-source FaaS software
			Apache OpenWhisk, enabling running serverless applications across multiple clouds, including
			private and hybrid infrastructure.
		</div>

		<a
			href="/download"
			style="text-decoration: none;"
			class="w-[323px] h-[49px] mx-auto mt-[30px] text-white bg-nuv-light-orange rounded-[20px] flex justify-center items-center"
		>
			<span class="font-normal text-[24px] leading-[28px] capitalize"> Download here </span>
		</a>
	</div>
</div>
