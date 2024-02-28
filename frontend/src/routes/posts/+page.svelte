<script>
	export let data;
</script>

<h3>Blog Posts</h3>


{#each data.posts as post}
	<p>
		<b>
			<a href={post.path}>
				{post.title}
			</a>
			({post.date})
		</b>
	</p>
{/each}