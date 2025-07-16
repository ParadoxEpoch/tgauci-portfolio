<template>
	<div class="scroller-outer">
		<ul ref="scroller" class="skill-list has-scrollbar" tabindex="0">
			<slot />
		</ul>
		<div class="controls">
			<a href="#" @click.prevent="scrollLeft" class="scroll-button scroll-left" aria-label="Scroll Left">
				<IconFasChevronLeft />
			</a>
			<a href="#" @click.prevent="scrollRight" class="scroll-button scroll-right" aria-label="Scroll Right">
				<IconFasChevronRight />
			</a>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		scrollLeft(refName) {
			const scroller = this.$refs.scroller;
			const scrollAmount = scroller.children[0].offsetWidth * 0.9;
			const newPosition = Math.max(0, scroller.scrollLeft - scrollAmount);
			scroller.scrollTo({ left: newPosition, behavior: 'smooth' });
		},
		scrollRight(refName) {
			const scroller = this.$refs.scroller;
			const scrollAmount = scroller.children[0].offsetWidth * 0.9;
			const maxScroll = scroller.scrollWidth - scroller.clientWidth;
			const newPosition = Math.min(maxScroll, scroller.scrollLeft + scrollAmount);
			scroller.scrollTo({ left: newPosition, behavior: 'smooth' });
		},
	}
}
</script>

<style lang="scss" scoped>
.scroller-outer {
	position: relative;
}

.controls {
	position: absolute;
	bottom: -10px;
	right: 0;
	display: flex;
	gap: 10px;

	a {
		color: $color-primary;
		display: flex;
		padding: 5px;
	}
}

.has-scrollbar {
	&::-webkit-scrollbar {
		width: 5px;
		height: 5px;
	}

	&::-webkit-scrollbar-track {
		background: #2b2b2c;
		border-radius: 5px;

		@include mobile {
			margin-right: 50px;
		}
	}

	&::-webkit-scrollbar-thumb {
		background: $color-primary;
		border-radius: 5px;
	}

	&::-webkit-scrollbar-button {
		width: 20px;

		@include desktop {
			width: 100px;
		}
	}
}

.skill-list {
	display: flex;
	justify-content: flex-start;
	align-items: stretch;
	gap: 15px;
	margin: 0 -15px;
	padding: 25px 15px;
	padding-bottom: 35px;
	margin-bottom: 40px;
	overflow-x: auto;
	scroll-behavior: smooth;
	overscroll-behavior-inline: contain;
	scroll-snap-type: inline mandatory;

	@include desktop {
		gap: 30px;
		margin-left: -30px;
		margin-right: -30px;
		padding: 30px;
		padding-bottom: 35px;
	}
}
</style>