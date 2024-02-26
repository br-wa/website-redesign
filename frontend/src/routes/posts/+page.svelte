<script>
	export let data;
</script>

<h2>Blog</h2>

<ul>
	{#each data.posts as post}
		<li>
			<h3>
				<a href={post.path}>
					{post.title}
				</a>
			</h3>
			Published {post.date}
		</li>
	{/each}
</ul>