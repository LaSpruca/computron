<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import type { Tutorial } from '$lib/types';

	export const load: Load = async ({ fetch }) => {
		let tutorials: Tutorial[] = await (await fetch('/tutorials/linux/tutorials.json')).json();
		let tags: Set<string> = new Set();
		let platforms: Set<string> = new Set();
		for (let download of tutorials) {
			download.tags.forEach(tags.add, tags);
		}
		return {
			props: {
				tutorials,
				tags: Array.of(...tags).map((x) => {
					return { tag: x, selected: false };
				}),
				platforms: Array.of(...platforms).map((x) => {
					return { platform: x, selected: false };
				})
			}
		};
	};
</script>

<script lang="ts">
	import type { Tutorial } from '$lib/types';

	type Tag = { tag: string; selected: boolean };

	export let tutorials: Tutorial[];
	export let tags: Tag[];

	let selectedTags: string[] = [];

	$: filteredTutorials =
		selectedTags.length >= 1
			? tutorials.filter((download) => selectedTags.every((v) => download.tags.includes(v)))
			: tutorials;
</script>

<h1 class="title">Downloads</h1>

<div class="filters">
	<span class="filters__title">Filter by:</span>
	<div class="filters__list">
		<span class="filters__list__title">Tags: </span>
		{#each tags as tag}
			<label class="filters__list__item">
				<input type="checkbox" class="filters__list__item__tag" bind:checked={tag.selected} />
				{tag.tag}
			</label>
		{/each}
	</div>
</div>

<div class="cards">
	{#each filteredTutorials as tutorial}
		<div class="card">
			<a sveltekit:prefetch href={"/tutorials/linux/" + tutorial.slug}>
				<h1 class="card__name">
					{tutorial.name}
				</h1>
				<div class="card__content">
					<h2 class="card__content__description">
						{tutorial.description}
					</h2>
					<p class="card__content__tags">Tags: {tutorial.tags.join(', ')}</p>
				</div>
			</a>
		</div>
	{/each}
</div>

<style lang="scss">
  @import '../../../css/colors';
  @import '../../../css/mixins';
  @import '../../../css/cards-display';

  .title {
    text-align: center;
    padding: 2rem;
    font-weight: 700;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
    position: relative;
    width: fit-content;

    &::before {
      position: absolute;
      bottom: 1rem;
      content: '';
      width: 100%;
      height: 1rem;
      background-color: $blue-crayola;
      transform: translateX(-15%);
    }
  }

  .filters {
    padding: 1rem;
    margin: 1rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    display: flex;
    gap: 1.5rem;

    &__title {
      font-size: 15pt;
      font-weight: 700;
      font-family: 'Open Sans', sans-serif;
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;

      &__title {
        font-weight: 600;
      }
    }
  }

	a {
		text-decoration: none;
		color: inherit;
	}
</style>
