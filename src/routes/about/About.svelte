<script>
	import PageLayout from '$lib/components/PageLayout.svelte';
	import TeamItem from '$lib/components/TeamItem.svelte';
	import michele from '$lib/assets/team/msciab.webp';
	import mirella from '$lib/assets/team/mirella.webp';
	import irina from '$lib/assets/team/irina.webp';
	import francesco from '$lib/assets/team/francesco.webp';
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
			src: francesco,
			alt: 'Francesco Timperi Tiberi',
			name: 'Francesco Timperi Tiberi',
			title: 'CO-Founder and CTO',
			linkedinLink: 'https://www.linkedin.com/in/francescotimperitiberi/'
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

<PageLayout>
	<div class="flex relative">
		<div
			class="absolute top-0 left-[61px] text-white z-10 text-[24px] leading-[28px] bg-nuv-blue shadow-nuv-box-shadow w-[86px] text-center py-[8px]"
		>
			A <br /> B <br /> O <br /> U <br /> T
		</div>
		<img src={nuvAbout} alt="nuvolaris illustration" />
	</div>
	<div class="flex w-full bg-white shadow-nuv-box-shadow mb-[100px]">
		<div class="pl-[72px] pr-[45px] pt-[45px]">
			<div class="py-[49px] pl-[30px] pr-[65px] mt-[44px] flex justify-center sticky">
				<ul class="text-nuv-blue font-normal text-[24px] leading-[42px] list-disc">
					<li>
						<a href="#ourstory">Our Story</a>
					</li>
					<li>
						<a href="#team">Team</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="w-[2px] h-[770px] bg-nuv-blue mt-[117px]" />
		<div class="pt-[106px] w-full">
			<div id="ourstory" class="text-nuv-blue font-semibold text-[48px] leading-[56px] ml-[81px]">
				Our Story
			</div>
			<div class="font-normal text-[14px] leading-[16px] mt-[48px] ml-[81px] w-[549px]">
				Everything started when Michele Sciabarrà, our CEO, was looking for an open source product
				implementing some of the features of Amazon Lambda for Kubernetes, and stumbled upon Apache
				OpenWhisk. After trying it out on a Windows machine, he found a small issue and quickly
				fixed it. <br /> <br />

				But instead of throwing it away, he contributed the fix to the project. The fix was quickly
				approved, which was a motivation to contribute more to the project. <br /> <br />

				Michele soon joined the project as an active contributor, by first implementing a runtime
				for the Go programming language, that turned out to be very fast. It was later used as a
				basis for the PHP runtime, following with Python, Ruby, Java, Rust and Deno runtimes. <br />
				<br />

				Michele later joined the OpenWhisk project in the Project Management Committee. <br />
				<br />

				Some of the founders of the OpenWhisk project left IBM to create a startup, Nimbella,
				focused on moving forward the OpenWhisk project and building "a beautiful cloud". <br />
				<br />

				Michele joined Nimbella six months after its foundation as one of the first employees, and
				worked at the beginning as a core platform developer, then moved into business managing
				operations in Europe, as Nimbella Europe Manager. <br /> <br />

				Nimbella was acquired by Digital Ocean in September 2021, when Michele became Senior
				Developer Advocate. But the business operations started in Europe made it clear that there
				exists a market for business operations which Nimbella as a division of Digital Ocean can
				not cover. Michele decided to leave and founded Nuvolaris. <br /> <br />

				So now we are in this together at Nuvolaris, the company whose name comes from italian word
				for cloud (nuvola).
			</div>
			<div
				id="team"
				class="text-nuv-blue font-semibold text-[48px] leading-[56px] ml-[81px] mt-[115px]"
			>
				Team
			</div>
			<div class="flex flex-wrap justify-around pr-[31px] mt-[101px] mb-[30px]">
				{#each team as member}
					<TeamItem
						src={member.src}
						alt={member.alt}
						name={member.name}
						title={member.title}
						linkedinLink={member.linkedinLink}
					/>
				{/each}
			</div>
		</div>
	</div>
</PageLayout>
