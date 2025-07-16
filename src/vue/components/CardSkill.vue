<template>
	<li class="skill-item">
		<div class="content-card">
			<figure class="skill-image-box">
				<img :src="image" :alt="title" width="60" :style="style" />
			</figure>

			<h3 class="skill-item-title">{{ title }}</h3>

			<div class="skill-text">
				<p>{{ description }}</p>
			</div>

			<div class="skill-level" :style="{ color: levelInfo.color }">
				<div>{{ levelInfo.name }}</div>
				<div>
					<IconFasMinus v-for="i in level" />
				</div>
			</div>
		</div>
	</li>
</template>

<script>
export default {
	props: {
		image: {
			type: String
		},
		title: {
			type: String
		},
		description: {
			type: String
		},
		level: {
			type: Number,
			default: 3
		},
		style: {
			type: Object,
			default: () => ({})
		}
	},
	computed: {
		levelInfo() {
			switch (this.level) {
				case 1:
					return {
						color: "#4CAF50",
						name: "Decent"
					};
				case 2:
					return {
						color: "gold",
						name: "Skilled"
					};
				case 3:
				default:
					return {
						color: "#f44336",
						name: "Expert"
					};
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.skill-item {
	min-width: 100%;
	scroll-snap-align: center;
}

.skill-image-box {
	position: absolute;
	top: 0;
	left: 0;
	transform: translate(15px, -25px);
	background: linear-gradient(to bottom right, #3f3f40 3%, #303030 97%);
	border-radius: 14px;
	box-shadow: -4px 8px 24px #00000040;
	display: flex;

	img {
		padding: 20%;
		object-fit: contain;
	}
}

.skill-item-title {
	margin-bottom: 7px;
	color: #fafafa;
	text-transform: capitalize;
	font-size: 1.125rem;
	font-weight: bold;
}

.skill-text {
	color: #d6d6d6;
	font-size: 0.9375rem;
	font-weight: 300;
	line-height: 1.6;
	display: -webkit-box;
	line-clamp: 4;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.content-card {
	position: relative;
	background: linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%);
	padding: 15px;
	padding-top: 45px;
	border-radius: 14px;
	box-shadow: 0 16px 30px #00000020;
	cursor: pointer;
	z-index: 1;

	&::before {
		content: "";
		position: absolute;
		inset: 1px;
		background: linear-gradient(to bottom right, hsla(240, 1%, 18%, 0.251) 0%, hsla(240, 2%, 11%, 0) 100%), hsl(240, 2%, 13%);
		border-radius: inherit;
		z-index: -1;
	}
}

.skill-level {
	display: flex;
    flex-direction: column;
    align-items: flex-end;
	position: absolute;
    right: 15px;
    top: 15px;

	> div:first-of-type {
		font-size: 0.9rem;
		margin-bottom: -4px;
	}

	> div:last-of-type {
		display: flex;
    	font-size: 1.5rem;
	}
}

@media (min-width: 580px) {
	.content-card {
		padding: 30px;
		padding-top: 25px;
	}

	.skill-image-box {
		transform: translate(30px, -30px);
		border-radius: 20px;

		img {
			width: 80px;
			height: 80px;
			//filter: drop-shadow(2px 4px 6px #000000B0);
		}
	}

	.skill-item-title {
		margin-bottom: 10px;
		margin-left: 95px;
	}

	.skill-text {
		line-clamp: 2;
		-webkit-line-clamp: 2;
	}
}

@media (min-width: 1024px) {
	.skill-item {
		min-width: calc(50% - 15px);
	}
}
</style>