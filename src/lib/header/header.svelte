<script lang="ts">
	import { page } from '$app/stores';

	let path: string;
	let pageName: string;
	page.subscribe((val) => {
		console.log(val.path);
		path = val.path;
		pageName =
			path !== '/'
				? path
						.substring(1)
						.split('/')
						.map((str) => str.charAt(0).toUpperCase() + str.substring(1))
						.join(' - ')
				: 'Home';
	});

	const getClassFor = (path: string): string => (path == this.path ? 'active' : '');
	$: console.log(pageName);
</script>

<header>
	<div class="brand">
		<h1>COMPUTRON</h1>
		<h2>{pageName}</h2>
	</div>
</header>
