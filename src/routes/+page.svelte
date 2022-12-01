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
