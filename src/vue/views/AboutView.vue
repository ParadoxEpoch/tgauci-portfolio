<template>
	<BaseHeader title="About Me" />
	<section class="about-text">
		<p>
			Experienced full-stack software engineer with a demonstrated history of working with custom server
			deployment, automation, web design and development. Skilled in full stack development, efficient
			client-server models & RESTful API development with an emphasis on emerging technologies and PWAs. My
			biggest strength is finding out of the box solutions to seemingly unsolvable technical and logistical
			problems.
		</p>
	</section>

	<section class="tech">
		<SectionTechnologies />
	</section>
</template>

<style lang="scss" scoped>
.about-text {
	margin-bottom: 40px;

	> p {
		margin-bottom: 15px;
		color: #d6d6d6;
		font-size: 0.9375rem;
		font-weight: 300;
		line-height: 1.6;
	}
}

.service {
	margin-bottom: 35px;
}

.service-list {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px 25px;
}

.tech {
	margin-bottom: 30px;
}
</style>