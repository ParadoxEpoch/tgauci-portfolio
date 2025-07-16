<template>
	<section class="container">
		<div class="not-found">
			<img src="/not-found.svg" loading="lazy" alt="Not Found" />
		</div>
		<SectionHeaderBig class="padding-none">
			404 <span>Not Found</span>
			<template #subtitle>Oops, I really hope this wasn't a broken link...</template>
		</SectionHeaderBig>
	</section>
</template>

<style lang="scss" scoped>
.not-found {
	text-align: center;
}

section.container {
	padding: 7rem 5%;
	position: relative;

	@include mobile {
		padding: 4rem 5%;
	}
}
</style>