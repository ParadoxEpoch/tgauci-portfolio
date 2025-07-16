<template>
	<li class="project-item">
		<component :is="linkComponent" v-bind="linkProps">
			<figure class="project-img">
				<div class="project-item-icon-box">
					<IconFabGithub v-if="this.link?.includes('github.com')" />
					<IconFabCodepen v-else-if="this.link?.includes('codepen.io')" />
					<IconFasArrowUpRightFromSquare v-else-if="this.isExternalUrl" />
					<IconFasCircleInfo v-else />
				</div>
				<img :src="image" :alt="title" loading="lazy">
			</figure>

			<div class="project-title-row">
				<h3 class="project-title">{{ title }}</h3>
				<span class="project-icons">
					<IconFabWindows v-if="hasPlatform('windows')" />
					<IconFabApple v-if="hasPlatform('apple')" />
					<IconFabAndroid v-if="hasPlatform('android')" />
					<IconFabLinux v-if="hasPlatform('linux')" />
					<IconFasCode v-if="hasPlatform('code')" />
					<IconFasTerminal v-if="hasPlatform('cli')" />
					
					<IconFasGlobe v-if="hasPlatform('web')" />
				</span>
			</div>
			<p class="project-category">{{ category }}</p>
		</component>
	</li>
</template>

<script>
export default {
	props: {
		title: {
			type: String
		},
		category: {
			type: String
		},
		image: {
			type: String,
			default: "https://placehold.co/600x450"
		},
		link: {
			type: String
		},
		platforms: {
			type: String
		}
	},
	computed: {
		isExternalUrl() {
			if (!this.link) return false;
			// Check if the link starts with http://, https://, or //
			return /^(https?:\/\/|\/\/)/.test(this.link);
		},
		linkComponent() {
			return this.isExternalUrl ? 'a' : 'RouterLink';
		},
		linkProps() {
			if (this.isExternalUrl) {
				return {
					href: this.link,
					target: '_blank',
					rel: 'noopener noreferrer'
				};
			} else {
				return {
					to: '/portfolio/' + this.link
				};
			}
		}
	},
	methods: {
		hasPlatform(platform) {
			const platformsArr = this.platforms?.split(",");
			if (!platformsArr) return false;
			return platformsArr.includes(platform);
		}
	}
};
</script>

<style lang="scss" scoped>
@keyframes scaleUp {
	0% {
		transform: scale(0.5);
	}

	100% {
		transform: scale(1);
	}
}

.project-item {
	display: block;
	animation: scaleUp 0.25s ease forwards;
	cursor: pointer;

	> a {
		width: 100%;
		text-decoration: none;

		&:hover {
			.project-item-icon-box {
				--scale: 1;
				opacity: 1;
			}

			.project-img::before {
				background: hsla(0, 0%, 0%, 0.5);
			}

			img {
				transform: scale(1.1);
			}
		}
	}
}

.project-img {
	position: relative;
	width: 100%;
	height: 200px;
	border-radius: 16px;
	overflow: hidden;
	margin-bottom: 15px;
	background: #31313b;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: transparent;
		z-index: 1;
		transition: 0.25s ease;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		transition: 0.25s ease;
	}
}

.project-item-icon-box {
	--scale: 0.8;
	background: #383838;
	color: $color-primary;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%) scale(var(--scale));
	font-size: 1.25rem;
	padding: 18px;
	border-radius: 12px;
	opacity: 0;
	z-index: 1;
	transition: 0.25s ease;

	svg {
		display: flex;
	}
}

.project-title-row {
	display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.project-title-row {
	margin: 0 10px;
}

.project-title {
	color: #fafafa;
	font-size: 0.9375rem;
	font-weight: 400;
	line-height: 1.3;
}

.project-icons {
	display: flex;
	align-items: center;
	gap: 5px;
	color: white;
}

.project-category {
	color: #d6d6d6b3;
	font-size: 0.875rem;
	font-weight: 300;
	margin-left: 10px;
}
</style>