<template>
	<header>
		<div class="header-wrapper">
			<div class="pretitle"><slot name="pretitle" /></div>
			<div class="title"><slot /></div>
			<div class="subtitle"><p><slot name="subtitle" /></p></div>
			<slot name="content" />
		</div>
	</header>
</template>

<style lang="scss" scoped>
header {
	padding-top: 7rem;
	padding-left: 5%;
	padding-right: 5%;
	text-align: center;
	flex-direction: column;
    align-items: center;
    display: flex;
	position: relative;

	&.large .header-wrapper {
		.title {
			font-size: 4.5rem;

			@include mobile {
				font-size: 2.25rem;
			}
		}

		.subtitle {
			font-size: 1.125rem;
			max-width: unset;

			@include mobile {
				font-size: 1rem;
			}
		}
	}

	&.padding-none {
		padding-top: 0;
		padding-left: 0;
		padding-right: 0;

		/* @include desktop {
			padding-left: 0;
			padding-right: 0;
		} */
	}

	&.gradient-top,
	&.gradient-top-blue {
		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-image: linear-gradient(to bottom, rgba(10, 10, 11, 0) 26%, #0a0a0b), radial-gradient(circle farthest-corner at 50% 170%, rgba(221, 83, 255, 0) 60%, rgba(174, 87, 251, .5) 75%, #7e5af7 89%, #e1d8ff);
			border-top-left-radius: 70px;
			border-top-right-radius: 70px;
			pointer-events: none;
			z-index: -1;
		}
	}

	&.gradient-top-blue::before {
		background-image: linear-gradient(to bottom,rgba(10,10,11,0) 26%,var(--black)),radial-gradient(circle farthest-corner at 50% 170%,rgba(83,178,255,0) 61%,rgba(130,143,255,.2) 75%,#364aff 87%,#202c98 95%,#e1d8ff)
	}

	@include mobile {
		padding-top: 4rem;
	}

	.header-wrapper {
		width: 100%;
		max-width: 50rem;

		.pretitle {
			background-image: linear-gradient(to right, #364aff, #29afff);
			-webkit-text-fill-color: transparent;
			-webkit-background-clip: text;
			background-clip: text;
			letter-spacing: 1px;
			text-transform: uppercase;
			font-size: 1rem;
			font-weight: 600;
			line-height: 120%;
			display: inline-block;
			margin-bottom: 1rem;
		}

		.title {
			color: white;
			margin-bottom: 1.5rem;
			font-family: Roobertpro, sans-serif;
			font-size: 4rem;
			font-weight: 700;
			line-height: 100%;

			@include mobile {
				font-size: 2rem;
				margin-bottom: 1.25rem;
			}

			:slotted(span) {
				background-image: linear-gradient(to right, #9a7dee, #eda4ff);
				-webkit-text-fill-color: transparent;
				-webkit-background-clip: text;
				background-clip: text;
				box-decoration-break: clone;
				-webkit-box-decoration-break: clone;
			}
		}

		.subtitle {
			margin-left: auto;
    		margin-right: auto;
			width: 100%;
    		max-width: 35rem;
		}
	}
}
</style>