<template>
	<header>
    	<h2 class="article-title">{{ title }}</h2>
    </header>
</template>

<script>
export default {
	props: {
		title: String
	}
}
</script>

<style lang="scss" scoped>
.article-title {
	position: relative;
	margin-bottom: 20px;
	padding-bottom: 20px;
	//font-size: 2rem;
	font-size: var(--fs-1);
    color: #fafafa;
    text-transform: capitalize;
	font-weight: 600;

	@include mobile {
		//font-size: 1.375rem;
		padding-bottom: 8px;
		font-weight: bold;
	}

	&::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 40px;
		height: 5px;
		background: linear-gradient(to right, $color-primary, #ffbb5c);
		border-radius: 3px;

		@include mobile {
			width: 30px;
			height: 3px;
		}
	}
}
</style>