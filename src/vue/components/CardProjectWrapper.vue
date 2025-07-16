<template>
	<ul class="project-list">
		<slot />
	</ul>
</template>

<style lang="scss" scoped>
.project-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    margin-bottom: 10px;
}

@media (min-width: 768px) {
    .project-list, .blog-posts-list {
        grid-template-columns: 1fr 1fr;
    }
}

@media (min-width: 1024px) {
    .project-list {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>