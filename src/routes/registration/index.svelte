<script context="module">
	export async function load({ fetch }) {
		const fetchResult = await fetch("http://localhost:9000/api/auth/check-availability", {
			method: "GET",
			credentials: "include",
		})
		if (fetchResult.ok) {
			return {
				status: 302,
				redirect: "/",
			}
		} else {
			return {}
		}
	}
</script>

<script>
	import { goto } from "$app/navigation"

	// const ADDRESS = "https://bs.devcodebox.com/"
	const ADDRESS = "http://localhost:9000/"
	let password = "",
		email = ""
	export let sid, data

	import { session } from "$app/stores"
	// const { session } = stores()

	// ! обработать повторные регистрации
	// !TODO Добавить валидацию полей

	const register = async () => {
		const response = await fetch(`${ADDRESS}api/auth/registration`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			credentials: "include",
			body: JSON.stringify({ email, password }),
		})
		const responseJSON = await response.json()
		console.log(responseJSON)
	}
</script>

<svelte:head>
	<title>Регистрация</title>
</svelte:head>

<h1>Регистрация</h1>

<form on:submit|preventDefault={register} method="post">
	<label>
		Email:
		<input type="email" bind:value={email} />
	</label>
	<label>
		Password:
		<input type="password" bind:value={password} />
	</label>
	<button type="submit">Регистрация</button>
</form>

<style>
</style>
