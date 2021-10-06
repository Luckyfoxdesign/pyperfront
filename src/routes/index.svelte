<script>
	import { goto } from "$app/navigation"
	import { session } from "$app/stores"

	// https://www.youtube.com/watch?v=bG7cxwBMVag

	const ADDRESS = "http://localhost:9000/"

	async function doreq(params) {
		// console.log(sid)
		// console.log(data)
		await fetch(`${ADDRESS}articles/all`, {
			credentials: "include",
		})
			.then((re) => re.json())
			.then((r) => {
				console.log(r)
				console.log($session.data)
			})
	}
</script>

<div>
	<h1>Welcome to SvelteKit</h1>
	<button on:click={doreq}>do</button>
</div>
