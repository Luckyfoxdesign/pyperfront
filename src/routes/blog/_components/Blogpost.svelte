<script>
	export let blogPost

	// повторно используется в админке, наверное можно вытащить куда-то в ожно место
	function formatArticleDate(dateInput) {
		const parsedDate = new Date(dateInput)
		const intlOptions = { year: "numeric", month: "short", day: "numeric" }
		return new Intl.DateTimeFormat("en-US", intlOptions).format(parsedDate)
	}
</script>

<a rel="prefetch" class="article-link" href="article/{blogPost.title.replace(/\s/g, '-')}-{blogPost._id}">
	<div class="article">
		<div class="article-description">
			<h2 class="article-title">{@html blogPost.title}</h2>
			<p class="article-short">{@html blogPost.subtitle}</p>
			<span class="article-date">{formatArticleDate(blogPost.dateCreated)}</span>
		</div>
		<div class="article-preview">
			{#if blogPost.previewSrc != ""}
				<img
					class="preview-image"
					loading="lazy"
					src={`${blogPost.previewSrc}`}
					alt={blogPost.previewAlt}
					on:error={() => {
						blogPost.previewSrc = "/site/no-image.webp"
					}}
				/>
			{:else}
				<img class="preview-image" src="/site/no-image.webp" alt="No" />
			{/if}
		</div>
	</div>
</a>

<style>
	.article {
		display: grid;
		grid-template: auto / 1fr 200px;
		column-gap: 32px;
		margin-top: 32px;
	}
	.article-title {
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		font-weight: 700;
	}
	.article-link {
		text-decoration: none;
	}
	.article-short {
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		font-family: inherit;
		color: var(--Gray75);
	}
	.article-date {
		color: var(--Gray75);
	}
	.article-preview {
		position: relative;
		overflow: hidden;
		width: 200px;
		height: 132px;
		/* background-color: var(--GrayCC); */
	}
	.preview-image {
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
	}
</style>
