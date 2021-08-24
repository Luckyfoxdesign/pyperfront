<script>
	let ki
	async function tr() {
		await fetch("https://bs.devcodebox.com/").then((r) => (ki = r))
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>test</p>
<p>test2</p>
<button on:click={tr}>test request</button>
<button>test 2</button>

{#if ki != undefined}
	<p>{ki}</p>
	<p>{ki.name}</p>
	<p>{ki.msg}</p>
{/if}
