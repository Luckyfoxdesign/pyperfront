<script>
	import { page } from "$app/stores"
</script>

<header>
	<nav>
		<img width="35" height="36" src="./logo.png" alt="Logotype Luckyf Fox Design" />
		<ul>
			<li class:active={$page.path === "/"}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.path === "/blog"}><a sveltekit:prefetch href="/blog">Blog</a></li>
		</ul>
	</nav>
</header>

<style>
	nav {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-top: 12px;
		padding-bottom: 12px;
		margin-bottom: 32px;
		border-bottom: 1px solid #000;
	}
	ul {
		font-size: 14px;
		list-style-type: none;
		margin: 0;
		padding: 0;
		padding-left: 16px;
		overflow: hidden;
	}
	li {
		float: left;
	}
	li a {
		display: block;
		color: #333;
		text-align: center;
		padding: 8px;
	}
</style>
