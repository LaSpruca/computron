<script>
	// Create a layout for all of the tutorial pages
	export let name;
	import "../css/tutorial.scss";
</script>

<h1>{ name }</h1>
<div class='tutorial'>
	<slot />
</div>

<style>
	h1 {
		text-align: center;
			font-size: 30pt;
	}
</style>