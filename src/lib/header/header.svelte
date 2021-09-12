<script lang="ts">
	import { page } from '$app/stores';
	import getPageName from '$lib/pageName';
	import logo from './logo.svg';

	let { path } = $page;
	let pageName: string;

	$: pageName = getPageName(path);

	console.log(path);

	const getClassFor = (pth: string): string => (pth == path ? 'active' : '');
</script>

<header>
	<div class="brand">
		<img alt="Computron logo" src={logo} class="logo" />
		<h2>{pageName}</h2>
	</div>

	<nav class="nav">
		<ul class="nav__list">
			<li class="nav__listitem"><a href="/">Home</a></li>

			<li class="nav__listitem">
				<a href="/downloads">Downloads</a>
			</li>
			<li class="nav__listitem">
				<a href="/tutorials">Tutorials</a>
				<ul class="nav__listitemdrop">
					<li><a href="/tutorials/linux">Linux</a></li>
					<li><a href="/tutorials/windows">Windows</a></li>
				</ul>
			</li>
			<li class="nav__listitem"><a href="links">Links</a></li>
		</ul>
	</nav>
</header>

<style lang="scss">
	@import 'colors';

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: rgb(0, 145, 255);
	}

	.brand {
		position: relative;
		padding: 2em 1em;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 30vw;
		z-index: 0;

		// clip-path: polygon(0 0, 100% 0, 100% 100, 0 100);

		.logo {
			width: 300px;
		}

		&::before {
			content: '';
			position: absolute;
			left: -50%;
			top: 0;
			width: 150%;
			height: 100%;
			background-color: #fcf7ff;
			transform: skewX(-30deg);
			z-index: -1;
		}
	}

	.nav {
		&__list {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			gap: 2rem;
			margin: 0 2rem;

			&item {
				list-style: none;
				font-weight: bold;
				font-size: 20pt;
				position: relative;
				padding: 1.5rem 1rem;
				cursor: pointer;

				&::after {
					content: '';
					width: 0;
					height: 0.3rem;
					position: absolute;
					left: 1rem;
					bottom: 0.8rem;
					background-color: #fcf7ff;
					transition: width 200ms ease-in;
				}

				&:hover::after,
				&:focus::after {
					width: 80%;
				}

				&:hover ul,
				&:focus ul {
					opacity: 1;
					visibility: visible;
				}

				&drop {
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

					li {
						list-style: none;
						padding: 0.5rem 1rem;
						font-size: 18pt;
					}
				}
			}
		}
	}
</style>
