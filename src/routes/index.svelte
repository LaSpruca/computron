<div class='welcome'>
	<h1>About Computron</h1>
	<p>
		A place to find downloads and tutorials for common programs, as well as command references for
		windows and linux
	</p>
</div>

<div class='section'>
	<div class='section__title'>
		<h1>Downloads</h1>
	</div>
	<div class='section__content'>
		<p>Download some free applications to help in your daily life</p>
		<br />
		<br />
		<div class='section__links'>
			<div class='section__links__link'><a href='/downloads'>Downloads</a></div>
		</div>
	</div>
</div>

<div class='section'>
	<div class='section__title'>
		<h1>Tutorials</h1>
	</div>
	<div class='section__content'>
		<p>Learn how to use your computer</p>
		<br />
		<br />
		<div class='section__links'>
			<div class='section__links__link'><a href='/tutorials/windows'>Tutorials - Windows</a></div>
			<div class='section__links__link'><a href='/tutorials/linux'>Tutorials - Linux</a></div>
		</div>

	</div>
</div>

<div class='section'>
	<div class='section__title'>
		<h1>References</h1>
	</div>
	<div class='section__content'>
		<p>Quick references for common settings and commands</p>
		<br />
		<br />
		<div class='section__links'>
			<div class='section__links__link'><a href='/tutorials/windows'>Tutorials - Windows</a></div>
			<div class='section__links__link'><a href='/tutorials/linux'>Tutorials - Linux</a></div>
		</div>
	</div>
</div>

<style lang='scss'>
  @import '../css/colors';
	@import "../css/mixins";
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

      .section__title::before {
        right: -50%;
        left: 0;
        text-align: right;
      }
    }

    &__title {
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

    &__content {
      width: 100%;
      margin: auto 0;
      text-align: center;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			&__links {
				display: flex;
				gap: 2rem;

				&__link {
					@include link;
				}
			}
    }
  }
</style>
