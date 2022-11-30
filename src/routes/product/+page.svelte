<script lang="ts">
	import Product from './Product.svelte';
	import ProductMobile from './ProductMobile.svelte';

	let innerWidth: number;
</script>

<svelte:head>
	<title>Product description - Nuvolaris: Join the serverless revolution!</title>
</svelte:head>

<svelte:window bind:innerWidth />
{#if innerWidth > 960}
	<Product />
{:else}
	<ProductMobile />
{/if}
