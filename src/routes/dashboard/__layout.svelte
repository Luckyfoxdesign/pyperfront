<script>
	import { page } from "$app/stores"
</script>

<div class="dashboard-wrapper">
	<div class="side-menu">
		<ul>
			<li class:active={$page.path === "/dashboard"}><a sveltekit:prefetch href="/dashboard">Overview</a></li>
			<li class:active={$page.path === "/dashboard/new-article"}>
				<a sveltekit:prefetch href="/dashboard/new-article">New article</a>
			</li>
		</ul>
	</div>
	<div class="content-wrapper"><slot /></div>
</div>

<style>
	.dashboard-wrapper {
		display: grid;
		grid-template-columns: 200px 1fr;
	}
	.content-wrapper {
		display: flex;
		justify-content: center;
		width: 100%;
	}
	/* .side-menu {
		width: 200px;
		height: 100vh;
		background-color: #ccc;
	} */
</style>
