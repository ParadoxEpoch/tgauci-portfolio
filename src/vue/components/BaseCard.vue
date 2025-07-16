<template>
	<div class="card">
		<slot />
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
.card {
	background: $card-background;
	border: 1px solid #383838;
	border-radius: 20px;
	box-shadow: 0 24px 80px rgb(0 0 0 / 25%);
	padding: 30px;

	@include mobile {
		padding: 15px;
	}
}
</style>