<!-- <script>
	import { goto } from "$app/navigation"
	import { onMount } from "svelte"

	let isUserHasRights = false

	async function checkAccess() {
		const fetchResult = await fetch("http://localhost:9000/api/auth/check", {
			method: "GET",
			credentials: "include",
		})
		if (fetchResult.ok) {
			isUserHasRights = true
			console.log(isUserHasRights)
		} else {
			goto("/")
		}
	}
	onMount(async () => {
		checkAccess()
	})
</script>

{#if isUserHasRights}
	<div>dashboard</div>
{/if} -->
<script>
	async function LogOut() {
		const address = "https://bs.devcodebox.com"
		const fetchResult = await fetch(`${address}/api/auth/check-availability`, {
			method: "GET",
			credentials: "include",
		})
		if (fetchResult.ok) {
			return {
				status: 302,
				redirect: "/",
			}
		}
	}
</script>

<div><button on:click={LogOut}>Log out</button></div>
