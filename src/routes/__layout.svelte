<script lang="ts">
	import '../css/global.scss';
	import Header from '$lib/header/Header.svelte';
	import getPageName from '$lib/pageName';
	import { page } from '$app/stores';

	let pageName = getPageName($page.path);
</script>

<svelte:head>
	<title>{pageName} | COMPUTRON</title>
</svelte:head>

<Header />

<main>
	<slot />
</main>
