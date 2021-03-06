<script lang='ts'>
	import { page } from '$app/stores';
	import getPageName from '$lib/pageName';
	import type { Writable } from 'svelte/store';
	import { writable } from 'svelte/store';
	import logo from './logo.svg';
	import { zip } from '$lib/utils';

	// Create a variable to store the name of the page
	let pageName: Writable<string> = writable('');

	// Update the page name when the path changes
	page.subscribe(({ path }) => {
		pageName.set(getPageName(path));
	});

	// Check to see which route is currently active
	const isActive = (pth: string): boolean =>
		zip(pth.split('/'), pth.split('/'))
			.slice(1)
			.map(([a, b]) => a === b)
			.reduce((prev, curr) => (prev === false ? false : curr));

	let burger: boolean = false;
</script>

<svelte:head>
	<!-- Set the page title -->
	<title>{$pageName} | COMPUTRON</title>
</svelte:head>

<header>
	<div class='brand'>
		<img alt='Computron logo' src={logo} class='logo' />
		<h2>{$pageName}</h2>
	</div>

	<button class='nav__burger-button' on:click={() => burger = !burger}>
		<svg xmlns='http://www.w3.org/2000/svg' width='1024' height='1024' viewBox='0 0 1024 1024' fill='none'>
			<g id='burger'>
				<path id='Rectangle 1' d='M12 24C12 17.3726 17.3726 12 24 12H1000C1006.63 12 1012 17.3726 1012 24V112H12V24Z'
							fill='#C4C4C4' />
				<rect id='Rectangle 2' x='12' y='462' width='1000' height='100' fill='#C4C4C4' />
				<path id='Rectangle 3'
							d='M12 912H1012V1000C1012 1006.63 1006.63 1012 1000 1012H24C17.3726 1012 12 1006.63 12 1000V912Z'
							fill='#C4C4C4' />
			</g>
		</svg>
	</button>

	<nav class='nav' class:shown={burger}>
		<ul class='nav__list'>
			<!-- Update the nav when the page route changes -->
			{#key $pageName}
				<li class='nav__list__item'><a href='/' class:active={isActive('/')}>Home</a></li>

				<li class='nav__list__item'>
					<a href='/downloads' class:active={isActive('/downloads')}>Downloads</a>
				</li>
				<li class='nav__list__item'>
					<a class:active={isActive('/tutorials')} href='/tutorials'>Tutorials</a>
					<ul class='nav__list__item__drop'>
						<li>
							<a class:active={isActive('/tutorials/linux')} href='/tutorials/linux'>Linux</a>
						</li>
						<li>
							<a class:active={isActive('/tutorials/windows')} href='/tutorials/windows'>Windows</a>
						</li>
					</ul>
				</li>
				<li class='nav__list__item'>
					<a href='/links' class:active={isActive('/links')}>Links</a>
				</li>
			{/key}
		</ul>
	</nav>
</header>

<style lang='scss'>
  @import '../../css/colors';

  /* Make the header a flexbox so that I can layout things correctly  */
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $blue-crayola;
    box-shadow: grey 0 0 10px;
  }

  /* Position the Compton logo correctly */
  .brand {
    position: relative;
    padding: 2em 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 30vw;
    z-index: 0;

    .logo {
      width: 70%;
      height: 100%;
    }

    /* Add the blue slanted background */
    &::before {
      content: '';
      position: absolute;
      left: -50%;
      top: 0;
      width: 150%;
      height: 100%;
      background-color: $ghost-white;
      /*Make the slant effect */
      transform: skewX(-30deg);
      /*Make everything render on top of it */
      z-index: -1;
    }
  }

  /* position the nav correctly */
  .nav {
    /* Hide the burger when not needed */
    &__burger-button {
      display: none;
    }

    /* Make the nav list display across with correct spacing between elements */
    &__list {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-wrap: wrap;
      gap: 2rem;
      margin: 0 2rem;

      /* Make the nav items appear on top of everything, with no list indicators */
      &__item {
        z-index: 99;
        list-style: none;
        font-weight: bold;
        font-size: 20pt;
        position: relative;
        padding: 1.5rem 1rem;

        /* Set link text styles */
        a {
          color: #e0e0e0;

          text-decoration: none;
          transition: 100ms color linear;

          /* Show when the user has clicked on an option */
          &.active {
            color: $ghost-white;
          }
        }

        /* Create the underline effect */
        &::after {
          content: '';
          width: 0;
          height: 0.3rem;
          position: absolute;
          left: 1rem;
          bottom: 0.8rem;
          background-color: $ghost-white;
          transition: width 200ms ease-in;
        }

        /* Make the underline effect show on hover */
        &:hover,
        &:focus {
          & a {
            color: $ghost-white;
          }

          &:after {
            width: 80%;
          }
        }

        &:hover ul,
        &:focus ul {
          opacity: 1;
          visibility: visible;
        }

        /* Create the dropdown box for links in the nav that need it */
        &__drop {
          position: absolute;
          top: 4.5rem;
          left: -1rem;
          box-shadow: 0 0 10px grey;
          background-color: white;
          width: 12rem;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          opacity: 0;
          visibility: hidden;
          transition: opacity 200ms ease-in-out;

          /* Style the dropdown links */
          li {
            list-style: none;
            padding: 0.5rem 1rem;
            font-size: 18pt;

            & a {
              color: $space-cadet !important;

              &:hover {
                color: $grey !important;
              }

              &.active {
                color: $grey !important;
              }
            }
          }
        }
      }
    }
  }

  /* Add some code to make the site responsive */
  @media only screen and (max-width: 1040px) {
    /* Switch the header to have a vertical layout */
    header {
      flex-direction: column;
    }

    /* Make the compuron logo take up the full width and hide the background */
    .brand {
      width: 100%;

      &::before {
        display: none;
      }
    }

    .nav__list {
      justify-content: center;
      margin: 0;
      padding: 0;
    }
  }

  /* On smaller screens, enable the burger menu layout for the header */
  @media only screen and (max-width: 487px) {
    .nav__burger-button {
      display: initial;
      background: none;
      border: none;
      width: 3rem;
      height: 2rem;
      margin-bottom: 1rem;

      svg {
        width: 3rem;
        height: 100%;
      }

      path, rect {
        fill: $space-cadet;
      }
    }

    .nav {
      display: none;
    }

    .nav.shown {
      display: inline;
      animation-name: show-animation;
      animation-timing-function: ease;
      animation-duration: 1s;
    }
  }

  /* Create animation for showing the burger menu */
  @keyframes show-animation {
    from {
      clip-path: inset(0 0 100% 0);
    }
    to {
      clip-path: inset(0 0 0 0);
    }
  }
</style>
