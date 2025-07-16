<template>
	<SectionHeader title="Languages" />
	<CardScrollerWrapper>
		<template v-for="(skill, index) in skills.languages" :key="index">
			<CardSkill
				:image="skill.image"
				:title="skill.title"
				:description="skill.description"
				:level="skill.level"
				:style="skill.style"
				@click="openModal(skill)" />
		</template>
	</CardScrollerWrapper>

	<SectionHeader title="Frontend" />
	<CardScrollerWrapper>
		<template v-for="(skill, index) in skills.frontend" :key="index">
			<CardSkill
				:image="skill.image"
				:title="skill.title"
				:description="skill.description"
				:level="skill.level"
				:style="skill.style"
				@click="openModal(skill)" />
		</template>
	</CardScrollerWrapper>

	<SectionHeader title="Backend" />
	<CardScrollerWrapper>
		<template v-for="(skill, index) in skills.backend" :key="index">
			<CardSkill
				:image="skill.image"
				:title="skill.title"
				:description="skill.description"
				:level="skill.level"
				:style="skill.style"
				@click="openModal(skill)" />
		</template>
	</CardScrollerWrapper>

	<SectionHeader title="Databases" />
	<CardScrollerWrapper>
		<template v-for="(skill, index) in skills.databases" :key="index">
			<CardSkill
				:image="skill.image"
				:title="skill.title"
				:description="skill.description"
				:level="skill.level"
				:style="skill.style"
				@click="openModal(skill)" />
		</template>
	</CardScrollerWrapper>

	<SectionHeader title="DevOps" />
	<CardScrollerWrapper>
		<template v-for="(skill, index) in skills.devops" :key="index">
			<CardSkill
				:image="skill.image"
				:title="skill.title"
				:description="skill.description"
				:level="skill.level"
				:style="skill.style"
				@click="openModal(skill)" />
		</template>
	</CardScrollerWrapper>

	<SectionHeader title="Other" />
	<CardScrollerWrapper>
		<template v-for="(skill, index) in skills.other" :key="index">
			<CardSkill
				:image="skill.image"
				:title="skill.title"
				:description="skill.description"
				:level="skill.level"
				:style="skill.style"
				@click="openModal(skill)" />
		</template>
	</CardScrollerWrapper>

	<BaseModal v-model:visible="showModal">
		<ModalContentSkill :data="currentSkill" />
    </BaseModal>
</template>

<script>
import skillsData from "@/data/skills";

export default {
	data() {
		return {
			skills: {
				languages: skillsData.filter(skill => skill.category === "languages"),
				frontend: skillsData.filter(skill => skill.category === "frontend"),
				backend: skillsData.filter(skill => skill.category === "backend"),
				devops: skillsData.filter(skill => skill.category === "devops"),
				databases: skillsData.filter(skill => skill.category === "databases"),
				other: skillsData.filter(skill => skill.category === "other")
			},
			showModal: false,
			currentSkill: null
		};
	},
	methods: {
		openModal(skill) {
			this.currentSkill = skill;
			this.showModal = true;
		}
	}
};
</script>