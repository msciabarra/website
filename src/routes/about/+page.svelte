<script lang="ts">
	import About from './About.svelte';
	import AboutMobile from './AboutMobile.svelte';

	let innerWidth: number;
</script>

<svelte:head>
	<title>About Us - Nuvolaris: Join the serverless revolution!</title>
</svelte:head>

<svelte:window bind:innerWidth />
{#if innerWidth > 960}
	<About />
{:else}
	<AboutMobile />
{/if}
