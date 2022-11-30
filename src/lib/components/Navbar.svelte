<script lang="ts">
	import MobileMenu from '$lib/components/MobileMenu.svelte';
	import nuvLogoBlue from '$lib/assets/nuvolaris-logo-new-blue.svg';
	import nuvLogoWhite from '$lib/assets/nuvolaris-logo-new-white.svg';
	import sandwichMenuIcon from '$lib/assets/icons/sandwich-menu-icon.png';

	let showMobileMenu = false;

	function toggleShowMobileMenu() {
		showMobileMenu = !showMobileMenu;
	}
</script>

<header
	class="flex justify-between items-center xl:bg-nuv-blue px-3 xl:px-[100px] h-24 xl:h-[86px] xl:w-full xl:z-50"
>
	<a href="/">
		<img src={nuvLogoBlue} alt="nuvolaris logo" class="xl:hidden mr-[80px] pt-3" />
		<img src={nuvLogoWhite} alt="nuvolaris logo" class="hidden xl:block mr-[80px] pt-3" />
	</a>
	<div class="hidden xl:flex text-[24px] leading-[28px] text-white h-full items-center">
		<a href="/product" class="mr-[80px] pt-3">Product</a>
		<a href="/documentation" class="mr-[80px] pt-3">Documentation</a>
		<a href="/blog" class="mr-[80px] pt-3">Blog</a>
		<a href="/about" class="mr-[80px] pt-3">About</a>
		<a href="/faq" class="mr-[80px] pt-3">FAQ</a>
		<a
			href="/download"
			class="bg-[#FFA944] h-full px-[10px] rounded-b-[20px] leading-[96px] pt-[6px]">Download</a
		>
	</div>
	<button class="xl:hidden">
		<img src={sandwichMenuIcon} alt="sandwich menu" on:click={toggleShowMobileMenu} />
	</button>
</header>
<MobileMenu show={showMobileMenu} toggle={toggleShowMobileMenu} />

<style>
	img {
		height: 36px;
	}
</style>
