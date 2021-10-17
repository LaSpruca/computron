<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		let request = await fetch('/tutorials/linux/tutorials.json');
		let files = await request.json();

		console.log(files);

		return {
			props: {
				tutorials: files
			}
		};
	};
</script>

<script lang="ts">
	import type { Tutorial } from '$lib/types';

	export let tutorials: Tutorial[];
</script>

<div class="cards">
	{#each tutorials as tutorial}
		<a href={'/tutorials/linux/' + tutorial.slug}>
			<div class="card">
				<h1 class="card__name">
					{tutorial.name}
				</h1>
				<div class="card__content">
					<h2 class="card__content__description">
						{tutorial.description}
					</h2>
					<p class="card__content__tags">Tags: {tutorial.tags.join(', ')}</p>
				</div>
			</div>
		</a>
	{/each}
</div>

<style lang="scss">
	@import '../../css/colors';
	@import '../../css/mixins';
	@import '../../css/cards-display';

	a {
		text-decoration: none;
		color: black;
	}
</style>
