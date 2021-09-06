<script>
	const ADDRESS = "https://bs.devcodebox.com/"
	async function logut(params) {
		await fetch(`${ADDRESS}go`).then((r) => console.log("logout: " + r))
	}
	async function register(params) {
		await fetch(`${ADDRESS}rg`, {
			credentials: "include",
		}).then((r) => console.log("register: " + r))
	}
	async function doreq(params) {
		await fetch(`${ADDRESS}do`, {
			credentials: "include",
		}).then((r) => console.log("do: " + r))
	}
</script>

<div>
	<h1>Welcome to SvelteKit</h1>
	<button on:click={logut}>logout</button>
	<button on:click={register}>register</button>
	<button on:click={doreq}>do</button>
</div>
