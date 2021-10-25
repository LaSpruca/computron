<script lang="ts">
	import '../css/global.scss';
	import Header from '$lib/header/Header.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<style lang="scss">
	main {
		padding: 3rem;
	}
</style>
