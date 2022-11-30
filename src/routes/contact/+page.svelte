<script lang="ts">
	import contactUsImg from '$lib/assets/form-images/contact-us.png';
	import ContactUsForm from '$lib/components/ContactUsForm.svelte';
</script>

<svelte:head>
	<title>Contact Us - Nuvolaris: Join the serverless revolution!</title>
</svelte:head>

<div class="bg-nuv-blue w-full h-full flex justify-center">
	<div class="flex bg-white w-5/6 mt-[80px] rounded-2xl shadow-nuv-box-shadow">
		<div class="h-full xl:w-1/2 p-5 :w-full">
			<ContactUsForm />
		</div>

		<div class="h-full w-1/2 hidden md:flex justify-center items-center">
			<img src={contactUsImg} alt="contact-us" />
		</div>
	</div>
</div>

<style>
	a {
		font-weight: bold;
		text-decoration: underline;
	}
</style>
