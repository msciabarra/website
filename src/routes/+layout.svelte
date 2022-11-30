<script lang="ts">
	import Top from '$lib/components/Navbar.svelte';
	import Bottom from '$lib/components/Bottom.svelte';
	import '../app.postcss';
	export const prerender = 'auto';
</script>

<Top />
<main class="">
	<slot />
</main>
<Bottom />
