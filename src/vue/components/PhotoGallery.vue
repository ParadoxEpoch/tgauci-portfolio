<template>
	<div class="card">
		<Carousel v-bind="carouselConfig" @slide-start="pauseActiveVideo" @slide-end="playActiveVideo" :ref="instanceId">
			<Slide v-for="(image, index) in images" :key="index" :class="'slide-index-' + index">
				<video v-if="/\.(mp4|mov|webm|ogg)$/i.test(image.url)" :src="image.url" :style="{ objectPosition: image.offsetPosition || 'top' }" loop muted playsinline></video>
				<img v-else :src="image.url" :style="{ objectPosition: image.offsetPosition || 'top' }" alt="image" draggable="false" />
				<div class="caption">{{ image.caption }}<a class="out-link" href="#" @click="openContent(image.url)" aria-label="View image"><IconFasArrowUpRightFromSquare /></a></div>
			</Slide>

			<template #addons>
				<Navigation />
			</template>
		</Carousel>
	</div>
</template>

<script>
import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

export default {
	components: {
		Carousel,
		Slide,
		Navigation
	},
	props: {
		images: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			carouselConfig: {
				height: 200,
				//itemsToShow: window.visualViewport?.width > 650 ? 2 : 1,
				itemsToShow: 1,
				gap: 5,
				wrapAround: true,
				breakpoints: {
					600: {
						itemsToShow: 2
					}
				}
			},
			instanceId: Math.random().toString(36).substring(2, 15),
			observer: null
		};
	},
	methods: {
		pauseActiveVideo(e) {
			const videoElem = this.$refs[this.instanceId].$el.querySelector(`.slide-index-${e.currentSlideIndex} video`);
			if (videoElem) {
				videoElem.pause();
				videoElem.currentTime = 0;
			}
		},
		playActiveVideo(e) {
			const videoElem = this.$refs[this.instanceId].$el.querySelector(`.slide-index-${e.currentSlideIndex} video`);
			if (videoElem) videoElem.play();
		},
		openContent(url) {
			// Open the image in a new tab
			window.open(url, '_blank');
		}
	},
	mounted() {
		// Create an IntersectionObserver to pause/play an active carousel video based on visibility
		this.observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				const videoElem = this.$refs[this.instanceId].$el.querySelector('.carousel__slide--active video');
				if (!videoElem) return;

				if (entry.isIntersecting) {
					videoElem.play();
				} else {
					videoElem.pause();
					videoElem.currentTime = 0;
				}
			});
		});
		// Observe the carousel element
		this.observer.observe(this.$refs[this.instanceId].$el);
	},
	beforeUnmount() {
		// Disconnect the observer when the component is unmounted
		if (this.observer) this.observer.disconnect();
	}
};
</script>

<style lang="scss" scoped>
:root {
	background-color: #242424;
}

.carousel {
	--vc-nav-background: rgba(255, 255, 255, 0.7);
	--vc-nav-border-radius: 100%;
}

img,
video {
	border-radius: 8px;
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: top;
}

.caption {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	/* text-align: center; */
	background: #000000b3;
	backdrop-filter: blur(5px);
	padding: 5px 10px;
	color: white;
    text-shadow: 2px 2px 5px #000000;
	border-radius: 0 0 8px 8px;
	display: flex;
    align-items: center;
    justify-content: space-between;

	.out-link {
		color: $color-primary;
		text-decoration: none;
		font-weight: bold;
		:deep(svg) {
			display: flex;
			filter: drop-shadow(2px 4px 6px black);
		}
	}
}
</style>