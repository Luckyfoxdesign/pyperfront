<script>
	let ki
	async function name(params) {
		const cspMetaTag = document.createElement("meta")
		cspMetaTag.setAttribute("http-equiv", "Content-Security-Policy")
		cspMetaTag.setAttribute("content", "connect-src 'self';")
		document.querySelector("head").appendChild(cspMetaTag)
		await fetch("https://bs.devcodebox.com/testroute").then((r) => console.log(r))
	}
</script>

<div>
	<h1>Welcome to SvelteKit</h1>
	<button on:click={name}>test</button>
	{#if ki}
		<p>ki</p>
	{/if}
</div>
