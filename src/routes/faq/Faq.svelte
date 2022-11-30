<script lang="ts">
	import PageLayout from '$lib/components/PageLayout.svelte';
</script>

<PageLayout>
	<div class="flex w-full bg-white shadow-nuv-box-shadow mb-[100px]">
		<div class="pt-[106px] w-full">
			<div class="text-nuv-blue font-semibold text-[32px] leading-[36px] ml-[81px]">
				Why would I choose Nuvolaris over public cloud serverless?
			</div>
			<div class="font-normal text-[14px] leading-[16px] mt-[48px] px-[81px] w-full">
				You are aware of vendor lock-in with public cloud providers and want to avoid it. The
				infrastructure bill you get from your cloud provider is already skyrocketing, and you are
				looking for ways to cut it. <br />
				You are not allowed to run applications on public cloud infrastructure, because of data privacy
				concerns. <br />
				You already have on-premise (private cloud) infrastructure and want an easy and cost effective
				way to develop serverless applications.
				<br />
				You already have infrastructure running on Kubernetes, but realise it is too complex and expensive
				to maintain. <br />
				You care about the portability of your applications and want to be able to run them in different
				clouds. <br />
				You are aware that your existing monolithic application performance is degrading and you need
				an easy and cost-effective way to re-architect it into a scalable app, but just don't know where
				and how to start.
				<br />
			</div>
			<div class="text-nuv-blue font-semibold text-[32px] leading-[36px] ml-[81px] mt-[48px]">
				What is needed to run Nuvolaris?
			</div>
			<div class="font-normal text-[14px] leading-[16px] mt-[48px] px-[81px] w-full">
				Nuvolaris is a serverless platform for Kubernetes. That means, the only prerequisite to use
				it is to have a running Kubernetes cluster anywhere. It comes with a simple to use command
				line installer which can even set up Kubernetes locally with kind, in a container on the
				developer machine. It is carefully tested with different flavours of Kubernetes, such as AWS
				EKS, Google Kubernetes Engine, Micro K8s, cluster installed on AWS EC2 instance or a generic
				Ubuntu instance - the list is in continuous expansion. The physical requirements for running
				applications on Nuvolaris are modest: a virtual machine with at least 4GB memory, 30GB disk
				space and 2 VCPUs is all that is needed.
			</div>
			<div class="text-nuv-blue font-semibold text-[32px] leading-[36px] ml-[81px] mt-[48px]">
				Can I use Nuvolaris in public clouds such as AWS and Google Cloud?
			</div>
			<div class="font-normal text-[14px] leading-[16px] mt-[48px] px-[81px] w-full">
				Yes, you can. You can either run a cluster on a virtual machine instance (AWS EC2, for
				example), which is cheaper, or use managed Kubernetes (AWS EKS or Google GKS), which is more
				expensive.
			</div>
			<div class="text-nuv-blue font-semibold text-[32px] leading-[36px] ml-[81px] mt-[48px]">
				How does Nuvolaris help avoid vendor lock-in?
			</div>
			<div class="font-normal text-[14px] leading-[16px] mt-[48px] px-[81px] w-full">
				Applications developed with Nuvolaris are portable between different clouds. With Nuvolaris,
				you develop full-stack, stateful applications that follow a prescribed structure. Once you
				develop an app, you can move it unchanged between different clouds - you only need to
				install Nuvolaris in another cloud. This is how you effectively make portable applications
				and avoid cloud provider lock-in. Note, however, that you cannot run applications without
				Nuvolaris - if you decide to stop paying a yearly licence, you will only be able to run your
				applications locally, and not in a production environment, because they will not scale
				anymore.
			</div>
			<div class="text-nuv-blue font-semibold text-[32px] leading-[36px] ml-[81px] mt-[48px]">
				Can I use the community edition of Nuvolaris in production?
			</div>
			<div class="font-normal text-[14px] leading-[16px] mt-[48px] px-[81px] w-full">
				The community edition of Nuvolaris is designed for local development and is not scalable,
				therefore not usable in a real production environment. It lacks key features such as
				scalability, database, support for real cloud storage. Short answer - no.
			</div>
			<div class="text-nuv-blue font-semibold text-[32px] leading-[36px] ml-[81px] mt-[48px]">
				What will be offered in the enterprise edition of Nuvolaris?
			</div>
			<div class="font-normal text-[14px] leading-[16px] mt-[48px] px-[81px] w-full">
				Compared to the community edition, the enterprise Nuvolaris offers unlimited scalability,
				MongoDB as a default database, support for real S3 compatible cloud storage, real-time
				monitoring, alerting and predefined dashboards, and finally, Nuvolaris' flagship: a no-code
				IDE for developing serverless apps. The price of the licence is proportional to the number
				of Kubernetes nodes.
			</div>
			<div class="text-nuv-blue font-semibold text-[32px] leading-[36px] ml-[81px] mt-[48px]">
				Which programming languages does Nuvolaris support?
			</div>
			<div class="font-normal text-[14px] leading-[16px] mt-[48px] px-[81px] w-full">
				Currently, Nuvolaris has runtimes for applications developed in .NET, Deno, Go, Java,
				Node.js, PHP, Python, Swift, Ruby and TypeScript. Supporting a new language is a moderate
				effort and can be done on demand.
			</div>
			<div class="text-nuv-blue font-semibold text-[32px] leading-[36px] ml-[81px] mt-[48px]">
				If I already have a legacy app with a database, can I keep using it with Nuvolaris?
			</div>
			<div class="font-normal text-[14px] leading-[16px] mt-[48px] px-[81px] w-full">
				Out-of-the-box, enterprise version of Nuvolaris offers MongoDB as a user database, but it is
				configurable. You can plug an existing external database by changing Nuvolaris
				configuration.
			</div>
			<div class="text-nuv-blue font-semibold text-[32px] leading-[36px] ml-[81px] mt-[48px]">
				How is Nuvolaris different from AWS Lambda, Google functions and other FaaS platforms?
			</div>
			<div class="font-normal text-[14px] leading-[16px] mt-[48px] px-[81px] w-full">
				In its essence, Nuvolaris is a FaaS platform, arguably even easier to use than proprietary
				FaaS such as AWS lambda. Whatever you can do with lambdas, you can do with Nuvolaris.
				However, Nuvolaris is much more than that - it is a serverless platform for Kubernetes. It
				greatly simplifies serverless development and offers ready solutions to common problems.
				Whereas with public providers you need cloud expertise to architect a scalable cloud-native
				app using different tools at your disposal (such as API Gateway, S3 storage, CloudFront,
				CloudWatch from AWS, to name just a few), Nuvolaris gives you everything you need to quickly
				develop and deploy a serverless app. <br />
				The pricing models are also different: with public providers, the cost is based on the number
				of invocations for your functions and the duration it takes for your code to execute. With Nuvolaris,
				there is no limitation in the number or duration of functions. You pay for the underlying Kubernetes
				infrastructure and Nuvolaris yearly licence.
			</div>
			<div class="text-nuv-blue font-semibold text-[32px] leading-[36px] ml-[81px] mt-[48px]">
				If I already use AWS Lambda, what is the effort needed to switch to Nuvolaris?
			</div>
			<div class="font-normal text-[14px] leading-[16px] mt-[48px] px-[81px] w-full">
				AWS lambdas can be transformed into Nuvolaris' functions by applying a simple adapter.
				Lambdas are however rarely used in isolation, so a careful analysis is needed for each
				particular case to assess the real effort needed to port an existing AWS serverless app to
				Nuvolaris. It is important to stress that regardless of the AWS application complexity, it
				definitely can be ported to Nuvolaris.
			</div>
			<div class="text-nuv-blue font-semibold text-[32px] leading-[36px] ml-[81px] mt-[48px]">
				Is using Nuvolaris a cheaper serverless solution compared to using public cloud providers,
				such as AWS?
			</div>
			<div class="font-normal text-[14px] leading-[16px] mt-[48px] mb-5 px-[81px] w-full">
				With Nuvolaris, the pricing model is different from public cloud serverless. Whereas with
				public providers the cost is based on the number of invocations for your functions and the
				duration it takes for your code to execute, with Nuvolaris, you pay for the underlying
				Kubernetes infrastructure and Nuvolaris yearly licence.
			</div>

			<!-- <div
                id="download"
                class="text-nuv-blue font-semibold text-[32px] leading-[36px] ml-[81px] mt-[68px]"
            >
                Download
            </div>
            <div
                class="font-normal text-[14px] leading-[16px] mt-[48px] ml-[81px] w-full"
            >
                Nuvolaris is an easy-to-use platform that helps software
                developers and companies deliver business value by creating and
                deploying portable serverless apps in any cloud. <br /> <br />

                Nuvolaris is created with the aim to become the ultimate
                platform for developers adopting a serverless computing model.
                It builds upon proven enterprise-grade open-source FaaS software
                Apache OpenWhisk, enabling running serverless applications
                across multiple clouds, including private and hybrid
                infrastructure.
            </div>

            <a
                href="/download"
                style="text-decoration: none;"
                class="w-[284px] h-[49px] ml-[219px] mb-[60px] mt-[36px] mr-[100px] self-center text-white bg-nuv-light-orange rounded-[20px] flex justify-center items-center"
            >
                <span class="font-normal text-[24px] leading-[28px] capitalize">
                    Download here
                </span>
            </a> -->
		</div>
	</div>
</PageLayout>

<style>
	a {
		font-weight: bold;
		text-decoration: underline;
	}
</style>
