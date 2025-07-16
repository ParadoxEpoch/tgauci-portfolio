<template>
	<ContentSection class="padded container">
		<div class="not-found">
			<img src="/not-found.svg" loading="lazy" alt="Not Found" />
		</div>
		<SectionHeaderBig class="padding-none">
			404 <span>Not Found</span>
			<template #subtitle>Oops, I really hope this wasn't a broken link...</template>
		</SectionHeaderBig>
	</ContentSection>
</template>

<style lang="scss" scoped>
.not-found {
	text-align: center;
}
</style>