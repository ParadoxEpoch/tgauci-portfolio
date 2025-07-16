<template>
	<div class="modal-img-wrapper">
		<figure class="modal-image-box">
			<img :src="data.image" :alt="data.title" :style="data.style">
		</figure>
	</div>

	<div class="modal-content">
		<h4 class="modal-title">{{ data.title }}</h4>

		<div class="subtitle">{{ data.subtitle }}</div>

		<div>
			<p>
				{{ data.description }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			default: () => ({
				image: '',
				title: '',
				subtitle: '',
				description: ''
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.modal-image-box {
  background: linear-gradient(to bottom right, #3f3f40 3%, #303030 97%);
  width: max-content;
  border-radius: 14px;
  margin-bottom: 15px;
  box-shadow: 0 16px 30px #00000020;
  display: flex;
}

.modal-content {
	.modal-title {
		margin-bottom: 4px;
		font-size: 1.5rem;
		color: #fafafa;
		font-weight: bold;
	}

	.subtitle {
		font-size: 0.9375rem;
		color: #d6d6d6b3;
		font-weight: 300;
		margin-bottom: 10px;
	}

	p {
		color: #d6d6d6;
		font-size: 0.9375rem;
		font-weight: 300;
		line-height: 1.6;
	}
}

@include desktop {
	.modal-img-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;

		> img {
			display: block;
			flex-grow: 1;
			width: 35px;
		}
	}

	.modal-image-box {
		border-radius: 18px;
		margin-bottom: 0;

		img {
			width: 80px;
			max-width: unset;
			padding: 20%;
        	object-fit: contain;
		}
	}
}
</style>