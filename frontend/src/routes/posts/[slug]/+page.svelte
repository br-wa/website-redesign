<script>
	export let data;
</script>

<article>
	<h3>{data.title}</h3>
	<p>Published: {data.date}</p>
	<svelte:component this={data.content} />
</article>