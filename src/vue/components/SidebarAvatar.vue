<template>
	<div class="sidebar-avatar">
		<div class="pause-control" @click="togglePause">
			<template v-if="!isPaused">
				<IconFasPause />
				<div>Pause</div>
			</template>
			<template v-else>
				<IconFasPlay />
				<div>Play</div>
			</template>
		</div>
		<transition name="fade">
			<video ref="videoA" v-show="activeRef === 'videoA'" muted playsinline preload="auto"
				@ended="switchVideo" style="position:absolute; top:0; left:0;">
				<source :src="memojiMov(videoAIndex)" type='video/mp4; codecs="hvc1"'>
				<source :src="memojiWebm(videoAIndex)" type="video/webm">
			</video>
		</transition>
		<transition name="fade">
			<video ref="videoB" v-show="activeRef === 'videoB'" muted playsinline preload="auto"
				@ended="switchVideo" style="position:absolute; top:0; left:0;">
				<source :src="memojiMov(videoBIndex)" type='video/mp4; codecs="hvc1"'>
				<source :src="memojiWebm(videoBIndex)" type="video/webm">
			</video>
		</transition>
		<transition name="fade">
			<!-- VideoC only plays on a 404 page -->
			<video ref="videoC" v-show="activeRef === 'videoC'" muted loop playsinline preload="auto"
				style="position:absolute; top:0; left:0;">
				<source :src="memojiMov('404')" type='video/mp4; codecs="hvc1"'>
				<source :src="memojiWebm('404')" type="video/webm">
			</video>
		</transition>
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeRef: 'videoA',
			videoAIndex: null,
			videoBIndex: null,
			videoPaused: false
		}
	},
	mounted() {
		// Setup play/pause event listeners
		const videoRefs = ['videoA', 'videoB', 'videoC'];
        videoRefs.forEach(refName => {
            const video = this.$refs[refName];
            if (video) {
                video.addEventListener('pause', this.onPlayPause);
				video.addEventListener('play', this.onPlayPause);
            }
        });

		this.videoAIndex = this.randomIndex()
		this.videoBIndex = this.randomIndexExcluding(this.videoAIndex)
		this.$refs.videoA.load()
		this.$refs.videoB.load()
		this.$refs.videoA.play()
	},
	computed: {
		is404Page() {
			return this.$route.name === 'not-found';
		},
		isPaused() {
			return this.videoPaused;
		}
	},
	watch: {
		is404Page(newVal) {
			if (newVal) {
				this.$refs.videoA.pause()
				this.$refs.videoB.pause()
				this.activeRef = 'videoC'
				this.$refs.videoC.play()
				this.$nextTick(() => {
					setTimeout(() => {
						this.$refs.videoA.currentTime = 0
						this.$refs.videoB.currentTime = 0
					}, 1000)
				})
			} else {
				this.activeRef = 'videoA'
				this.$refs.videoA.play()
				setTimeout(() => {
					this.$refs.videoC.pause()
					this.$refs.videoC.currentTime = 0
				}, 1000);
			}
		}
	},
	methods: {
		onPlayPause(event) {
			// Update state only if this is the active video element
			const video = this.$refs[this.activeRef];
            if (event.target === video) {
                this.videoPaused = video.paused;
            }
		},
		randomIndex() {
			return Math.floor(Math.random() * 5) + 1;
		},
		randomIndexExcluding(exclude) {
			let i
			do { i = this.randomIndex() } while (i === exclude)
			return i
		},
		memojiMov(i) { return `/memoji/memoji${i}.mov` },
		memojiWebm(i) { return `/memoji/memoji${i}.webm` },
		switchVideo() {
			const oldRef = this.activeRef;
			const newRef = oldRef === 'videoA' ? 'videoB' : 'videoA';
			const oldIndex = this[`${oldRef}Index`];
			this.activeRef = newRef;
			const nextIndex = this.randomIndexExcluding(oldIndex);
			this.$refs[this.activeRef].play();
			this.$nextTick(() => {
				setTimeout(() => {
					const nextVid = this.$refs[oldRef];
					nextVid.querySelector('source:nth-child(1)').src = this.memojiMov(nextIndex);
					nextVid.querySelector('source:nth-child(2)').src = this.memojiWebm(nextIndex);
					nextVid.load();
				}, 1000);
			})
		},
		togglePause() {
			const video = this.$refs[this.activeRef];
			video.paused ? video.play() : video.pause();
		}
	}
}
</script>

<style lang="scss" scoped>

.sidebar-avatar {
	--video-size: 200px;

	@include mobile {
		--video-size: 75px;
	}

	position: relative;
	width: var(--video-size);
	height: var(--video-size);

	video {
		width: var(--video-size);
		height: var(--video-size);
	}

	.pause-control {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: #fff;
		font-size: 1.25rem;
		font-weight: bold;
		z-index: 1;
		backdrop-filter: blur(8px);
		cursor: pointer;
		filter: drop-shadow(2px 4px 6px black);
		-webkit-user-select: none;
		user-select: none;
		opacity: 0;
		transition: opacity 0.5s ease;

		&:hover {
			opacity: 1;
		}

		.svg-icon {
			font-size: 2rem;
		}
	}
}

.fade-enter-active {
    transition: opacity 0.5s ease 0.4s; /* Delay fade-in until fade-out is complete */
}

.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>