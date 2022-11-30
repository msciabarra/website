<script lang="ts">
	import Resources from './Resources.svelte';
	import ResourcesMobile from './ResourcesMobile.svelte';
	let innerWidth: number;
</script>

<svelte:head>
	<title>Online resources and social networks - Nuvolaris: Join the serverless revolution!</title>
</svelte:head>

<svelte:window bind:innerWidth />
{#if innerWidth > 960}
	<Resources />
{:else}
	<ResourcesMobile />
{/if}
