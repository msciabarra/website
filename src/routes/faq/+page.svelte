<script lang="ts">
	import Faq from './Faq.svelte';
	import FaqMobile from './FaqMobile.svelte';

	let innerWidth: number;
</script>

<svelte:head>
	<title>Frequently Asked Questions - Nuvolaris: Join the serverless revolution!</title>
</svelte:head>

<svelte:window bind:innerWidth />
{#if innerWidth > 960}
	<Faq />
{:else}
	<FaqMobile />
{/if}
