<script>
	import { each } from "svelte/internal"

	import Blogpost from "./_components/Blogpost.svelte"

	const posts = [
		{
			title: "Cyber-realists",
			description:
				"Soon after the invention of the wagon, someone was able to move logs around much more easily. And shortly after that, someone had a wagon run over their leg. Wagons were used to deliver food but they also were put to use hauling weapons around.",
			imagePath: "./logo.png",
			publishedDate: "23 Aug 2021",
		},
		{
			title: "The nesting bowls",
			description:
				"Seven bowls might take up an entire cabinet. But if the designer slopes the sides of each bowl just so, they stack. The amount of space required to store them goes down by 80%. The hard part isn’t figuring out how to stack them. It’s realizing that stacking is an option.",
			imagePath: "./logo.png",
			publishedDate: "23 Aug 2021",
		},
		{
			title: "The inevitable decline of fully open platforms",
			description:
				"The spammers have found Substack. There’s a long history of useful tools on the internet attracting selfish con men. Substack is a platform for bloggers who want paying subscribers. They’ve done the technical work and quiet lobbying to get past the promo folder and the spam filters, and as a result, a blog on Substack is going to reach more people and come with a veneer of respectability.",
			imagePath: "./logo.png",
			publishedDate: "23 Aug 2021",
		},
	]
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="blog-content">
	{#each posts as post}
		<Blogpost post={post} />
	{/each}
</div>
