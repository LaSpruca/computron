<script lang='ts'>
	import '../../../css/tutorial.scss';
	import { process } from "highlight-ts";

	let codeElements = document.getElementsByName("code");

	for (let element of codeElements) {
	}
</script>

<div class='tutorial'>
	<slot />
</div>
