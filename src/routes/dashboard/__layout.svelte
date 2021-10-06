<script context="module">
	export async function load({ fetch }) {
		const fetchResult = await fetch("http://localhost:9000/api/auth/check-availability", {
			method: "GET",
			credentials: "include",
		})
		if (fetchResult.ok) {
			return {}
		} else {
			return {
				status: 302,
				redirect: "/",
			}
		}
	}
</script>

<script>
	export let test
	import { sessionData } from "./../../lib/store.js"
	import { getStores, page, session } from "$app/stores"
</script>

<div class="dashboard-wrapper">
	<div class="side-menu">
		<ul>
			<li class:active={$page.path === "/dashboard"}>
				<a sveltekit:prefetch href="/dashboard">Overview</a>
			</li>
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
	.side-menu {
		width: 200px;
		height: 100vh;
		background-color: #ccc;
	}
</style>
