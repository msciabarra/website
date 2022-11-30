<script lang="ts">
	import featureCloud from '$lib/assets/landing-feature-cloud.svg';
	import nuvSchema from '$lib/assets/nuvolaris-schema2.png';
	import nuvBuilder from '$lib/assets/nuvolaris-builder.png';
</script>

<div id="mobile-page-layout" class="pb-[15px]">
	<div class="bg-nuv-blue h-[214px] w-full px-[41px] flex justify-center">
		<div
			class="relative top-[21px] bg-white shadow-nuv-box-shadow w-full h-fit flex flex-col items-center pb-[20px]"
		>
			<img src={featureCloud} alt="feature" class="w-[255px] h-[221px]" />
			<span class="text-nuv-blue text-[24px] leading-[28px] font-bold mt-[19px]"
				>What is nuvolaris?</span
			>
		</div>
	</div>
	<div class="mt-[110px] text-[14px] leading-[16px] font-normal px-[56px]">
		Nuvolaris is an easy-to-use platform that helps software developers and companies deliver
		business value by creating and deploying portable serverless apps in any cloud. <br /> <br />

		Nuvolaris is created with the aim to become the ultimate platform for developers adopting a
		serverless computing model. It builds upon proven enterprise-grade open-source FaaS software
		Apache OpenWhisk, enabling running serverless applications across multiple clouds, including
		private and hybrid infrastructure.
	</div>
	<img src={nuvSchema} alt="nuvolaris schema" class="w-[95%] mx-auto mt-[50px] mb-[34px]" />
	<span class="text-nuv-blue text-[24px] leading-[28px] font-bold ml-[51px]"> Builder </span>

	<div class="text-[14px] leading-[16px] font-normal px-[30px] mt-[14px]">
		And finally let's take a sneak peak into Nuvolaris low code builder, and describe how it will be
		used on an example of creating a simple, but complete serverless application. Let's suppose that
		we want to build a simple app that displays charts to authorised users based on some data
		contained in the database. So the charts are updated as soon as something in the database
		changes. Here we can see how Nuvolaris builder user interface will look like. On the left-hand
		side it will have a pallete organized into libraries, where Nuvolaris developer can find all
		components ready to be used to build an app. You can therefore select a component and drag it
		onto a canvas, or the panel where all components used by the application are displayed. For our
		example application, we would use login component, crud component, chart visualizer component,
		and the non visual database component. <br /> <br />

		A user would then define relations between different components, and add actions to the
		components which will be triggered by events coming from other components. <br /> <br />

		For example, when something is created or modified in the database component, database state is
		changed, and simultaneously data visualization is also changed, because it is related to this
		component. When the user clicks logout button, login component would transform to logout state
		and crud component would be hidden. So builder would allow to chain actions on different
		components triggered by different events.
		<br /> <br />

		These simple actions would alow Nuvolaris user to build a full-stack serverless application in a
		visual way, without actually writing code. Then, Nuvolaris developers would also be able to sell
		ready-made components on the Nuvolaris marketplace.
	</div>
	<img src={nuvBuilder} alt="nuvolaris builder" class="w-[95%] mx-auto mt-[30px]" />
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
