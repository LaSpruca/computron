<script lang="ts">
	import '../../../css/tutorial.scss';
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/default.min.css"
	/>
	<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js"></script>
	<script>
		hljs.highlightAll();
	</script>
</svelte:head>

<div class="tutorial">
	<slot />
</div>
