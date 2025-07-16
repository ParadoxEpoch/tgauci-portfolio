<template>
	<div class="section-header">{{ title }}</div>
</template>

<script>
export default {
	props: {
		title: String
	}
}
</script>

<style lang="scss" scoped>
.section-header {
	margin-bottom: 20px;
    //font-size: 1.5rem;
	font-size: var(--fs-2);
    color: #fafafa;
    text-transform: capitalize;
	font-weight: bold;
}
</style>