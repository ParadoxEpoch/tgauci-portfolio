<template>
	<div class="scroller-outer">
		<ul ref="scroller" class="skill-list" tabindex="0" @scroll="handleScroll">
			<slot />
		</ul>
		<div class="custom-scrollbar">
			<div ref="scrollbarTrack" class="scrollbar-track" @click="handleTrackClick">
				<div ref="scrollbarThumb" class="scrollbar-thumb" @mousedown="startDrag"></div>
			</div>
		</div>
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
	data() {
		return {
			isDragging: false,
			dragStartX: 0,
			initialScrollLeft: 0
		}
	},
	mounted() {
		this.updateThumbWidth();
		window.addEventListener('resize', this.updateThumbWidth);
		document.addEventListener('mousemove', this.handleDrag);
		document.addEventListener('mouseup', this.endDrag);
	},
	beforeUnmount() {
		window.removeEventListener('resize', this.updateThumbWidth);
		document.removeEventListener('mousemove', this.handleDrag);
		document.removeEventListener('mouseup', this.endDrag);
	},
	methods: {
		scrollLeft() {
			const scroller = this.$refs.scroller;
			const scrollAmount = scroller.children[0].offsetWidth * 0.9;
			const newPosition = Math.max(0, scroller.scrollLeft - scrollAmount);
			scroller.scrollTo({ left: newPosition, behavior: 'smooth' });
		},
		scrollRight() {
			const scroller = this.$refs.scroller;
			const scrollAmount = scroller.children[0].offsetWidth * 0.9;
			const maxScroll = scroller.scrollWidth - scroller.clientWidth;
			const newPosition = Math.min(maxScroll, scroller.scrollLeft + scrollAmount);
			scroller.scrollTo({ left: newPosition, behavior: 'smooth' });
		},
		handleScroll(event) {
			// Update the scrollbar thumb position based on scrollLeft
			const scroller = this.$refs.scroller;
			const maxScroll = scroller.scrollWidth - scroller.clientWidth;
			const scrollPercent = (scroller.scrollLeft / maxScroll) * 100;

			// Update the scrollbar thumb "left" style, compensating for thumb width
			const scrollbarThumb = this.$refs.scrollbarThumb;
			const thumbWidth = parseFloat(getComputedStyle(scrollbarThumb).width);
			const trackWidth = this.$refs.scrollbarTrack.offsetWidth;
			const maxThumbLeft = ((trackWidth - thumbWidth) / trackWidth) * 100;

			const thumbLeftPercent = ((scrollPercent / 100) * maxThumbLeft).toFixed(2);
			scrollbarThumb.style.left = `${thumbLeftPercent}%`;
		},
		updateThumbWidth() {
			const scroller = this.$refs.scroller;
			const scrollbarThumb = this.$refs.scrollbarThumb;
			const trackWidth = this.$refs.scrollbarTrack.offsetWidth;

			// Calculate the ratio of visible content to total content
			const visibleRatio = scroller.clientWidth / scroller.scrollWidth;

			// Set minimum thumb width (e.g., 20px) and maximum (trackWidth)
			const minThumbWidth = 20;
			const maxThumbWidth = trackWidth;
			const thumbWidth = Math.max(minThumbWidth, Math.min(maxThumbWidth, trackWidth * visibleRatio));

			// Update thumb width
			scrollbarThumb.style.width = `${thumbWidth}px`;
		},
		handleTrackClick(event) {
			if (event.target === this.$refs.scrollbarThumb) return; // Don't scroll if clicking on thumb

			// Calculate the target scroll position based on click position
			const scroller = this.$refs.scroller;
			const trackRect = this.$refs.scrollbarTrack.getBoundingClientRect();
			const thumbWidth = parseFloat(getComputedStyle(this.$refs.scrollbarThumb).width);
			const clickX = event.clientX - trackRect.left;
			const availableTrackSpace = trackRect.width - thumbWidth;
			const targetThumbLeft = Math.max(0, Math.min(availableTrackSpace, clickX - thumbWidth / 2));
			const maxScroll = scroller.scrollWidth - scroller.clientWidth;
			const targetScrollLeft = (targetThumbLeft / availableTrackSpace) * maxScroll;

			// Scroll to target position
			scroller.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
		},
		startDrag(event) {
			event.preventDefault();
			this.isDragging = true;
			this.dragStartX = event.clientX;
			this.initialScrollLeft = this.$refs.scroller.scrollLeft;

			// Set auto scroll behaviour and disable scroll snap during drag
			this.$refs.scroller.style.scrollBehavior = 'auto';
			this.$refs.scroller.style.scrollSnapType = 'none';
		},
		handleDrag(event) {
			if (!this.isDragging) return;

			// Calculate the drag distance and update scroll position
			const scroller = this.$refs.scroller;
			const thumbWidth = parseFloat(getComputedStyle(this.$refs.scrollbarThumb).width);
			const maxScroll = scroller.scrollWidth - scroller.clientWidth;
			const availableTrackSpace = this.$refs.scrollbarTrack.offsetWidth - thumbWidth;
			const scrollRatio = maxScroll / (availableTrackSpace);
			const dragDistance = event.clientX - this.dragStartX;
			const targetScrollLeft = this.initialScrollLeft + (dragDistance * scrollRatio);

			// Apply scroll position
			scroller.scrollLeft = Math.max(0, Math.min(maxScroll, targetScrollLeft));
		},
		endDrag() {
			if (this.isDragging) {
				this.isDragging = false;
				// Reset auto scroll behaviour and enable scroll snap after drag
				this.$refs.scroller.style.scrollBehavior = 'smooth';
				this.$refs.scroller.style.scrollSnapType = 'inline mandatory';
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.custom-scrollbar {
	position: absolute;
	bottom: 0px;
	width: 65%;
	height: 5px;
	left: 50%;
	transform: translateX(-50%);
	background: transparent;
	border-radius: 5px;
	overflow: hidden;
	padding: 0 25px;

	@include mobile {
		width: 100%;
	}

	.scrollbar-track {
		position: relative;
		height: 100%;
		background: #2b2b2c;
		border-radius: 5px;
		overflow: hidden;
		cursor: pointer;

		@include mobile {
			margin-right: 50px;
		}
	}

	.scrollbar-thumb {
		position: absolute;
		left: 0;
		width: 70px;
		height: 100%;
		background: $color-primary;
		border-radius: 5px;
		cursor: default;
	}
}

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

::-webkit-scrollbar {
	// Hide default scrollbar
	display: none;
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