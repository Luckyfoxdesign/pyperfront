<script>
  import Header from "$lib/header/Header.svelte";
  import "../app.css";
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<Header />

<main>
  <slot />
</main>

<footer>
  <p>
    visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit
  </p>
</footer>

<style>
  main {
    display: flex;
    flex-direction: column;
  }
</style>
