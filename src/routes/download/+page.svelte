<script>
	import nuvDocBusinessImg from '$lib/assets/nuvolaris-documentation-business.svg';
	import PageLayout from '$lib/components/PageLayout.svelte';

	let version = 'v0.2.2';
	let base = 'https://github.com/nuvolaris/nuvolaris/releases/download';
	let microbots = 'https://github.com/nuvolaris/microbots/releases/download';

	let archs = [
		['Linux, Intel 64bit', 'linux-amd64.tar.gz'],
		['Linux. ARM 64bit', 'linux-arm64.tar.gz'],
		['Mac OSX, Intel 64bit ', 'darwin-amd64.tar.gz'],
		['Mac OSX, Apple M1 ', 'darwin-arm64.tar.gz'],
		['Windows, Intel 64bit ', 'windows-amd64.zip']
	];
</script>

<svelte:head>
	<title>Download the latest release - Nuvolaris: Join the serverless revolution!</title>
</svelte:head>

<div id="mobile-page-layout" class="pb-[15px]">
	<div class="bg-nuv-blue h-[214px] w-full px-[41px] flex justify-center">
		<div
			class="relative top-[21px] bg-white shadow-nuv-box-shadow w-full h-fit flex flex-col items-center pb-[20px]"
		>
			<img src={nuvDocBusinessImg} alt="feature" class="w-[255px] h-[221px]" />
			<span class="text-nuv-blue text-[24px] leading-[28px] font-bold mt-[19px]">Download</span>
		</div>
	</div>
	<div class="mt-[110px] text-[14px] leading-[16px] font-normal px-[56px] mb-[30px]" />
	<div class="flex w-full bg-white shadow-nuv-box-shadow mb-[100px]">
		<div class="w-full xl:flex xl:justify-center">
			<div
				class="bg-white px-[28px] pt-[22px] xl:w-[60%] xl:pt-[120px] pb-[4px] text-nuv-text-dark-gray font-normal text-[16px] xl:text-[22px] leading-[18px] xl:leading-[26px] tracking-[-0.02em] text-justify"
			>
				<div class="prose">
					<h3>Download the CLI <tt>nuv</tt></h3>
					<ul class="list-disc list-inside">
						{#each archs as arch}
							<li>
								<a href="{base}/{version}/nuv-{version}-{arch[1]}"
									><tt>nuv</tt> <b>{version}</b> {arch[0]}</a
								>
							</li>
						{/each}
					</ul>
					<h3>
						Download <a href="https://github.com/nuvolaris/microbots">MicroBots</a>, including
						<tt>nuv</tt>
					</h3>
					<ul class="list-disc list-inside">
						{#each archs as arch}
							<li>
								<a href="{microbots}/{version}/microbots-{version}-{arch[1]}"
									><tt>microbots</tt> <b>{version}</b>
									{arch[0]}</a
								>
							</li>
						{/each}
					</ul>
					<h4>Note</h4>
					<p>
						On recent Mac OSX, after the downloading and unpacking, you may need to run at the
						terminal:<br />
					</p>
					<pre>xattr -d com.apple.quarantine nuv</pre>
				</div>
				<div />
				<br />
			</div>
		</div>
	</div>
</div>
