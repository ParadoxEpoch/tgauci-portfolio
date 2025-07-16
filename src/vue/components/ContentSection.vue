<template>
	<section>
		<div class="content">
			<slot />
		</div>
	</section>
</template>

<style lang="scss" scoped>
section {
	padding-top: 7rem;
    padding-bottom: 7rem;
	position: relative;

	@include mobile {
		padding-top: 4rem;
		padding-bottom: 4rem;
	}

	&.padded {
		padding-left: 5%;
		padding-right: 5%;
	}

	&.container > .content {
		max-width: 80rem;
		margin: auto;
	}

	&.container-wide > .content {
		max-width: 120em;
		margin: auto;
	}

	&.container-narrow > .content {
		max-width: 68rem;
		margin: auto;
	}

	&.gradient-top > .content::before,
	&.gradient-top-blue > .content::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(to bottom, rgba(10, 10, 11, 0) 26%, #0a0a0b), radial-gradient(circle farthest-corner at 50% 170%, rgba(221, 83, 255, 0) 60%, rgba(174, 87, 251, 0.5) 75%, #7e5af7 89%, #e1d8ff);
		//background-image: linear-gradient(to bottom,rgba(10,10,11,0) 26%,#0a0a0b),radial-gradient(circle farthest-corner at 50% 170%,rgba(221, 83, 255, 0) 60%,rgba(174, 87, 251, 0.5) 75%,#7e5af7 87%,#e1d8ff 95%,#e1d8ff);
		border-top-left-radius: 70px;
		border-top-right-radius: 70px;
		pointer-events: none;
		z-index: -1;

		@include mobile {
			border-top-left-radius: 30px;
    		border-top-right-radius: 30px;
			background-image: linear-gradient(to bottom,rgba(10,10,11,0) 26%,#0a0a0b),radial-gradient(circle farthest-corner at 50% 80%,rgba(83,178,255,0) 61%,rgba(130,143,255,.2) 75%,rgba(174, 87, 251, 0.5) 87%,#7e5af7 95%,#e1d8ff)
		}
	}

	&.gradient-top-blue > .content::before {
		background-image: linear-gradient(to bottom,rgba(10,10,11,0) 26%,#0a0a0b),radial-gradient(circle farthest-corner at 50% 170%,rgba(83,178,255,0) 61%,rgba(130,143,255,.2) 75%,#364aff 87%,#29afff 95%,#e1d8ff);

		@include mobile {
			background-image: linear-gradient(to bottom,rgba(10,10,11,0) 26%,#0a0a0b),radial-gradient(circle farthest-corner at 50% 80%,rgba(83,178,255,0) 61%,rgba(130,143,255,.2) 75%,#364aff 87%,#29afff 95%,#e1d8ff)
		}
	}

	&.gradient-bottom > .content::after,
	&.gradient-bottom-blue > .content::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(to top, rgba(10, 10, 11, 0) 26%, #0a0a0b), radial-gradient(circle farthest-corner at 50% 170%, rgba(221, 83, 255, 0) 60%, rgba(174, 87, 251, 0.5) 75%, #7e5af7 89%, #e1d8ff);
		border-bottom-left-radius: 70px;
		border-bottom-right-radius: 70px;
		pointer-events: none;
		z-index: -1;

		@include mobile {
			border-bottom-left-radius: 30px;
    		border-bottom-right-radius: 30px;
		}
	}

	&.gradient-bottom-blue > .content::after {
		background-image: linear-gradient(to top,rgba(10,10,11,0) 26%,#0a0a0b),radial-gradient(circle farthest-corner at 50% -30%,rgba(83,178,255,0) 47%,rgba(130,143,255,.2) 71%,#364aff 82%,#29afff 89%,#d8f1ff 99%)
	}
}
</style>