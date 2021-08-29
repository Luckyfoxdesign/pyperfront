<script>
	export let post
</script>

<div class="blog-post">
	<img src={post.imagePath} alt={post.imageAlt} />
	<div class="post-description">
		<div class="main-description">
			<h1>{post.title}</h1>
			<p>{post.description}</p>
		</div>
		<div class="additional-info">
			<div class="date">{post.publishedDate}</div>
		</div>
	</div>
</div>
