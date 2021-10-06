<script>
	import { onMount } from "svelte"
	// import Blogpost from "./_components/Blogpost.svelte"
	import NewsSkeleton from "./_components/NewsSkeleton.svelte"

	let blogPostsArray
	const ADDRESS = "http://localhost:9000/"
	onMount(async () => {
		await fetch(`${ADDRESS}articles/all`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then((responseResult) => {
				if (responseResult.status === 200) {
					return responseResult.json()
				} else {
					throw new Error("Something went wrong")
				}
			})
			.then((responseResultJSON) => {
				console.log(responseResultJSON)
				blogPostsArray = responseResultJSON.result
			})
			.catch((getArticlesError) => {
				console.log(getArticlesError)
			})
	})

	function formatArticleDate(dateInput) {
		const parsedDate = new Date(dateInput)
		const intlOptions = { year: "numeric", month: "short", day: "numeric" }
		return new Intl.DateTimeFormat("en-US", intlOptions).format(parsedDate)
	}
</script>

<svelte:head>
	<title>Index page</title>
</svelte:head>

<!-- <div class="content">
	<div class="articles-list">
		{#if blogPostsArray != null}
			{#each blogPostsArray as post}
				<Blogpost post={post} />
			{/each}
		{:else}
			<NewsSkeleton />
		{/if}
	</div>
</div> -->

<div class="content">
	<div class="articles-list">
		{#if blogPostsArray != null}
			{#each blogPostsArray as blogPost}
				<a rel="prefetch" class="article-link" href="blog/article/{blogPost.title.replace(/\s/g, '-')}-{blogPost._id}">
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
			{/each}
		{:else}
			<NewsSkeleton />
		{/if}
	</div>
</div>

<style>
	.content {
		padding-bottom: 92px;
	}
	.articles-list {
		padding-bottom: 96px;
	}
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
