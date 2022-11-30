<script lang="ts">
	export let data: { title: any; date: any; content: any };
	$: ({ title, date, content } = data);
</script>

<svelte:head>
	<title>{title} - Nuvolaris: Join the serverless revolution!</title>
	<meta property="og:title" content={title} />
</svelte:head>

<article>
	<p>Published: {date}</p>
	<h1>{title}</h1>

	<div class="prose">
		<svelte:component this={content} />
	</div>
</article>
