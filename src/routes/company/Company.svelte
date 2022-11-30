<script lang="ts">
	import arrowRightIcon from '$lib/assets/icons/arrow-right.png';
	import micheleGiaccaImg from '$lib/assets/founders/michele_giacca.jpeg';
</script>

<div
	class="xl:hidden h-[42px] bg-nuv-blue text-[18px] font-medium leading-[22px] tracking-[-0.02em] flex text-white items-center px-[24px]"
>
	<span class="mr-[10px]">Home</span>
	<img src={arrowRightIcon} class="w-[9px] mr-[13px]" alt="arrow right" />
	<span>Company</span>
</div>
<div class="w-full xl:flex xl:justify-center">
	<div
		class="bg-white px-[28px] pt-[22px] xl:w-[60%] xl:pt-[120px] pb-[4px] text-nuv-text-dark-gray font-normal text-[16px] xl:text-[22px] leading-[18px] xl:leading-[26px] tracking-[-0.02em] text-justify"
	>
		<p class="text-[30px]">Our Company</p>
		<br /><br />

		<img
			src={micheleGiaccaImg}
			align="right"
			class="w-[117px] xl:w-[272px] xl:h-[272px] h-[117px] mx-[22px] mb-[22px] xl:mx-[60px] xl:mt-[30px] xl:mb-[30px]"
			alt=""
		/>

		<div>
			Everything started when Michele Sciabarrà, our CEO, was looking for an open source product
			implementing some of the features of Amazon Lambda for Kubernetes, and stumbled upon Apache
			OpenWhisk. After trying it out on a Windows machine, he found a small issue and quickly fixed
			it.<br /><br /> But instead of throwing it away, he contributed the fix to the project. The
			fix was quickly approved, which was a motivation to contribute more to the project. <br /><br
			/>
			Michele soon joined the project as an active contributor, by first implementing a runtime for the
			Go programming language, that turned out to be very fast. It was later used as a basis for the
			PHP runtime, following with Python, Ruby, Java, Rust and Deno runtimes. <br /><br />
			Michele later joined the OpenWhisk project in the Project Management Committee. <br /><br />

			Some of the founders of the OpenWhisk project left IBM to create a startup, Nimbella, focused
			on moving forward the OpenWhisk project and building "a beautiful cloud". <br /><br />
			Michele joined Nimbella six months after its foundation as one of the first employees, and worked
			at the beginning as a core platform developer, then moved into business managing operations in
			Europe, as Nimbella Europe Manager. <br /><br />

			Nimbella was acquired by Digital Ocean in September 2021, when Michele became Senior Developer
			Advocate.<br />
			But the business operations started in Europe made it clear that there exists a market for business
			operations which Nimbella as a division of Digital Ocean can not cover.<br />
			Michele decided to leave and founded Nuvolaris. <br /><br />

			So now we are in this together at Nuvolaris, the company whose name comes from italian word
			for cloud (nuvola).
		</div>
		<br />
	</div>
</div>

<style>
	a {
		font-weight: bold;
		text-decoration: underline;
	}
</style>
