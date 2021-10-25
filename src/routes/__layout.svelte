<script lang="ts">
	import '../css/global.scss';
	import Header from '$lib/header/Header.svelte';
</script>

<!-- Add the header to the page -->
<Header />

<main>
	<!-- Where the content of the page will be rendered	-->
	<slot />
</main>

<style lang="scss">
	/* Add some padding to the main page */
	main {
		padding: 3rem;
	}
</style>
