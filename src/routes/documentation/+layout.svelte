<script>
	import feature from '$lib/assets/nuvolaris-documentation-business.svg';
</script>

<svelte:head>
	<title>Documentation - Nuvolaris: Join the serverless revolution!</title>
	<meta property="og:title" content="Documentation" />
</svelte:head>

<div id="mobile-page-layout" class="pb-[15px]">
	<div class="bg-nuv-blue h-[214px] w-full px-[41px] flex justify-center">
		<div
			class="relative top-[21px] bg-white shadow-nuv-box-shadow w-full h-fit flex flex-col items-center pb-[20px]"
		>
			<img src={feature} alt="feature" class="w-[255px] h-[221px]" />
			<span class="text-nuv-blue text-[24px] leading-[28px] font-bold mt-[19px]">Documentation</span
			>
		</div>
	</div>
	<div class="mt-[110px] text-[14px] leading-[16px] font-normal px-[56px] mb-[30px]" />
	<div class="text-[14px] leading-[16px] font-normal px-[30px] mt-[14px] mb-[30px] prose">
		
        <slot class="prose" />
	
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
