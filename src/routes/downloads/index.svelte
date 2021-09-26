<script lang='ts' context='module'>
	import type { Load } from '@sveltejs/kit';
	import type { Download } from '$lib/types';

	export const load: Load = async ({ fetch }) => {
		let downloads: Download[] = await (await fetch('/downloads/downloads.json')).json();
		let tags: Set<string> = new Set();
		let platforms: Set<string> = new Set();
		for (let download of downloads) {
			download.tags.forEach(tags.add, tags);
			download.platforms.forEach(platforms.add, platforms);
		}
		return {
			props: {
				downloads,
				tags: Array.of(...tags).map(x => {
					return { tag: x, selected: false };
				}),
				platforms: Array.of(...platforms).map(x => {
					return { platform: x, selected: false };
				})
			}
		};
	};
</script>

<script lang='ts'>
	import _ from "lodash";

	type Platform = { platform: string, selected: boolean };
	type Tag = { tag: string, selected: boolean };


	export let downloads: Download[];
	export let tags: Tag[];
	export let platforms: Platform[];

	let selectedPlatforms: string[] = [];
	let selectedTags: string[] = [];

	let filteredDownloadsByPlatform: Download[];
	let filteredDownloadsByTag: Download[];

	$: filteredDownloadsByPlatform = selectedPlatforms.length >= 1 ? downloads.filter(download => selectedPlatforms.every(v => download.platforms.includes(v))) : downloads;
	$: filteredDownloadsByTag = selectedTags.length >= 1 ? downloads.filter(download => selectedTags.every(v => download.tags.includes(v))) : downloads;

	$: selectedPlatforms = platforms.filter(p => p.selected).map(p => p.platform);
	$: selectedTags = tags.filter(p => p.selected).map(p => p.tag);

	let filteredDownloads: Download[];

	$: {
		filteredDownloads = _.intersection(filteredDownloadsByPlatform, filteredDownloadsByTag);
	}
</script>

<h1 class='title'>Downloads</h1>

<div class='filters'>
	<span class='filters__title'>Filter by:</span>
	<div class='filters__list'>
		<span class='filters__list__title'>Tags: </span>
		{#each tags as tag}
			<label class='filters__list__item'>
				<input type='checkbox' class='filters__list__item__tag' bind:checked={tag.selected}>
				{tag.tag}
			</label>
		{/each}
	</div>
	<div class='filters__list'>
		<span class='filters__list__title'>Platform: </span>
		{#each platforms as platform}
			<label class='filters__list__item'>
				<input type='checkbox' class='filters__list__item__tag' bind:value={platform.selected}>
				{platform.platform}
			</label>
		{/each}
	</div>
</div>

<div class='downloads'>
	{#each filteredDownloads as download}
		<div class='download-card'>
			<h1 class='download-card__name'>
				{download.name}
			</h1>
			<div class='download-card__content'>
				<h2 class='download-card__content__description'>
					{download.description}
				</h2>
				<div class='download-card__content__link'>
					<a href={download.url}>Goto site</a>
				</div>
				<p class='download-card__content__tags'>Tags: {download.tags.join(", ")}</p>
				<p class='download-card__content__platforms'>Platforms: {download.platforms.join(", ")}</p>
			</div>
		</div>
	{/each}
</div>

<style lang='scss'>
  @import '../../css/colors';
  @import "../../css/mixins";

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

  .downloads {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 3;
    justify-content: center;
    align-items: center;
  }

  .download-card {
    @include box;

    width: 30%;
    min-width: 300px;

    &__name {
      background-color: $blue-crayola;
      color: $ghost-white;
      padding: 1rem;
    }

    &__content {
      padding: 0.5rem 2rem 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 0.5rem;

      &__description {
        font-weight: bold;
        font-size: 12pt;
      }

      &__link {
        @include link;
        padding: 0.5rem;
      }

      &__tags,
      &__platforms {
        color: $grey;
        font-weight: 300;
      }
    }
  }
</style>