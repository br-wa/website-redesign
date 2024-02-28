<script>
	export let data;
</script>

<svelte:head>
    <title>{data.title} | Brandon Wang</title>
</svelte:head>

<article>
	<p><b>{data.title}</b> ({data.date})</p>
	<p><i>{data.subtitle}</i></p>
	<svelte:component this={data.content} />
	{#if data.hasEditors}
		<p><i>Thanks to {data.editors} for reading and feedback.</i></p>
	{/if}
</article>