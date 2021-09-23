<div class="welcome">
	<h1>About Computron</h1>
	<p>
		A place to find downloads and tutorials for common programs, as well as command references for
		windows and linux
	</p>
</div>

<div class="section">
	<div class="title">
		<h1>Downloads</h1>
	</div>
	<div class="content">
		<p>Download some free applications to help in your daily life</p>
		<br />
		<br />
		<a href="/downloads">Downloads</a>
	</div>
</div>

<div class="section">
	<div class="title">
		<h1>Tutorials</h1>
	</div>
	<div class="content">
		<p>Learn how to use your computer</p>
		<br />
		<br />
		<a href="/tutorials/windows">Tutorials - Windows</a>
		<a href="/tutorials/linux">Tutorials - Linux</a>
	</div>
</div>

<div class="section">
	<div class="title">
		<h1>References</h1>
	</div>
	<div class="content">
		<p>Quick references for common settings and commands</p>
		<br />
		<br />
		<a href="/tutorials/windows">Tutorials - Windows</a>
		<a href="/tutorials/linux">Tutorials - Linux</a>
	</div>
</div>

<style lang="scss">
	@import '../css/colors';

	@mixin box {
		text-align: center;
		margin: 1em;
		border-radius: 30px;
		overflow: hidden;
		background-color: $ghost-white;
		border: #efefef 2px solid;
	}

	.welcome {
		@include box;
		h1 {
			background-color: $blue-crayola;
			padding: 1rem;
			color: $ghost-white;
		}

		p {
			padding: 3em;
			font-size: 17pt;
		}
	}

	.section {
		@include box;
		display: flex;
		flex-direction: row;

		&:nth-child(2n + 1) {
			flex-direction: row-reverse;

			.title::before {
				right: -50%;
				left: 0;
				text-align: right;
			}
		}

		.title {
			position: relative;
			padding: 3em 1em;
			display: flex;
			flex-direction: row;
			z-index: 0;
			width: 30%;
			color: $ghost-white;

			&::before {
				content: '';
				position: absolute;
				left: -50%;
				top: 0;
				width: 150%;
				height: 100%;
				background-color: $blue-crayola;
				transform: skewX(-30deg);
				z-index: -1;
			}
		}

		.content {
			width: 100%;
			// height: max-content;
			margin: auto 0;
			text-align: center;

			a {
				background-color: $space-cadet;
				padding: 1rem;
				color: $ghost-white;
				text-decoration: none;
				transition: ease-in 0.1s transform;

				&:hover {
					transform: scale(110%);
				}
			}
		}
	}
</style>
