<script lang='ts' context='module'>
	import type { Load } from '@sveltejs/kit';
	import type { Download } from '$lib/types';

	export const load: Load = async ({ fetch }) => {
		let downloads: Download[] = await (await fetch('/downloads/downloads.json')).json();
		console.log(downloads);
		return {
			props: {
				downloads
			}
		};
	};
</script>

<script lang='ts'>
	export let downloads: Download[];
</script>

<h1 class='title'>Downloads</h1>

<div class='downloads'>
	{#each downloads as download}
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