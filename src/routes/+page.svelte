//cookies
<script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="60149b7a-4ce0-422a-9184-c380fe6a8768" data-blockingmode="auto" type="text/javascript"></script>
<script id="CookieDeclaration" src="https://consent.cookiebot.com/60149b7a-4ce0-422a-9184-c380fe6a8768/cd.js" type="text/javascript" async></script>
// end declaration cookies
<script lang="ts">
	import Landing from './Landing.svelte';
	import LandingMobile from './LandingMobile.svelte';

	let innerWidth: number;
</script>

<svelte:head>
	<title>Home page - Nuvolaris: Join the serverless revolution!</title>
</svelte:head>

<svelte:window bind:innerWidth />
{#if innerWidth > 960}
	<Landing />
{:else}
	<LandingMobile />
{/if}
