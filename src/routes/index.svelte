<script>
	let ki
	async function name(params) {
		await fetch("https://bs.devcodebox.com/api", {
			"Content-Security-Policy": "default-src 'self'",
		}).then((r) => console.log(r))
	}
</script>

<div>
	<h1>Welcome to SvelteKit</h1>
	<button on:click={name}>test</button>
	{#if ki}
		<p>ki</p>
	{/if}
</div>
