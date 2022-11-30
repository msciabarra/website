<script>
	import nuvLogoWhite from '$lib/assets/nuvolaris-logo-new-white.svg';
	import linkedinLogo from '$lib/assets/social-media-logos/LinkedinLogo.svg';
	import youtubeLogo from '$lib/assets/social-media-logos/YoutubeLogo.svg';
	import discordLogo from '$lib/assets/social-media-logos/DiscordLogo.svg';
	import githubLogo from '$lib/assets/social-media-logos/GithubLogo.svg';
	let socials = [
		{
			label: 'linkedin',
			url: 'https://www.linkedin.com/company/nuvolaris-io/',
			img: linkedinLogo
		},
		{
			label: 'youtube',
			url: 'https://www.youtube.com/channel/UCPt5hk7qcOkESjB7kii1byw',
			img: youtubeLogo
		},
		{
			label: 'discord',
			url: 'https://discord.com/invite/VSGG7aQ2Ds',
			img: discordLogo
		},
		{
			label: 'github',
			url: 'https://github.com/nuvolaris',
			img: githubLogo
		}
	];

	let partners = [];

	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<footer class="mt-auto">
	<div class="flex flex-col items-center mb-[88px]">
		<span
			class="text-nuv-blue font-semibold text-[20px] leading-[23px] xl:text-[64px] xl:leading-[75px]"
			>Join the serverless revolution</span
		>
		<!-- <button
            class="w-[241px] h-[49px] bg-nuv-light-orange text-white rounded-[20px] font-normal text-[24px] leading-[28px] mt-[39px]"
            >Sign Up</button
        > -->
	</div>
	<div class="bg-nuv-blue px-[10px] pt-[13px] xl:pt-[31px] pb-[11px] xl:pb-[45px]">
		<div class="xl:max-w-[1280px] xl:mx-auto">
			<div class="flex flex-col xl:flex-row xl:justify-between xl:items-start">
				<img src={nuvLogoWhite} alt="nuvolaris logo" class="w-[144px] xl:w-[347px]" />
				<div
					class="flex flex-wrap flex-col px-[12px] xl:px-0 h-[300px] xl:flex-nowrap xl:flex-row xl:h-auto text-white xl:[&>*]:mr-[65px] font-normal text-[12px] leading-[14px] mt-[28px] [&>div>a]:mb-[5px]"
				>
					<div class="flex flex-col mb-[15px] xl:mb-0">
						<span
							class="uppercase font-medium text-[16px] leading-[18px] xl:text-[24px] xl:leading-[28px] mb-[13px]"
							>Product</span
						>
						<a href="/download">Download Free</a>
						<a href="/">Information</a>
					</div>
					<div class="flex flex-col mb-[15px] xl:mb-0">
						<span
							class="uppercase font-medium text-[16px] leading-[18px] xl:text-[24px] xl:leading-[28px] mb-[13px]"
						>
							Company
						</span>
						<a href="/about">Our Story</a>

						<!-- a href="">Imprint</a -->
					</div>
					<div class="flex flex-col">
						<span
							class="uppercase font-medium text-[16px] leading-[18px] xl:text-[24px] xl:leading-[28px] mb-[13px]"
						>
							Documentation
						</span>
						<a href="/resources">Resources</a>
						<a href="/documentation/#installation">Installation</a>
					</div>
					<div class="last:mr-0 flex flex-col">
						<span
							class="uppercase font-medium text-[16px] leading-[18px] xl:text-[24px] xl:leading-[28px] mb-[13px]"
						>
							Help
						</span>
						<a href="/faq">FAQ</a>
						<a href="https://github.com/nuvolaris/nuvolaris/issues">Issue Tracker</a>
						<a href="https://github.com/nuvolaris">GitHub</a>
						<a href="https://discord.com/invite/VSGG7aQ2Ds">Discord</a>
						<a href="https://www.linkedin.com/company/nuvolaris-io/">LinkedIn</a>
						<a href="https://www.youtube.com/channel/UCPt5hk7qcOkESjB7kii1byw">Youtube</a>
						<a href="/contact">Contact Us</a>

						<a href="mailto:info@nuvolaris.io" class="mt-[13px]">info@nuvolaris.io</a>
					</div>
				</div>
			</div>
			<div class="flex w-fit mx-auto mb-[30px] xl:mb-[50px]">
				{#each socials as social}
					<a href={social.url} class="mr-[15px] xl:mr-[51px] last-of-type:mr-0">
						<img src={social.img} alt={social.label} class="w-[32px]" /></a
					>
				{/each}
			</div>
			<div class="w-fit mx-auto flex flex-col items-center">
				<div
					class="w-[276px] xl:w-[755px] h-[1px] border-nuv-border-color border-[1px] border-solid mb-[17px]"
				/>
				<span
					class="text-white font-normal text-[12px] leading-[14px] xl:text-[24px] xl:leading-[28px] capitalize"
				>
					{#if innerWidth > 1280}
						© 2022 Nuvolaris All rights reserved. Privacy Policy & Terms of Service
					{:else}
						© 2022 Nuvolaris All rights reserved.
					{/if}
				</span>
			</div>
		</div>
	</div>
</footer>
