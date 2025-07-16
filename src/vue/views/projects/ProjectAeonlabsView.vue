<template>
	<BaseHeader title="AeonLabs" />

	<section>
		<SectionHeader title="About" />
		<p>
			AeonLabs is an online custom PC store that I developed and co-founded to provide a platform for users to configure and purchase custom-built gaming and office PCs.
			AeonLabs features a user-friendly builder interface, allowing customers to select components based on their preferences and budget which are automatically validated for compatibility.
		</p>
		<p>
			AeonLabs underwent several iterations, beginning as a fairly simple PHP/Laravel application with a pre-made authentication system.
			Over time, I transitioned to a more complex architecture using a custom-built authentication system and a microservices approach, which allowed for greater flexibility and scalability.
			By the AeonLabs v3 release the project had fully transitioned to a JavaScript stack, utilizing a microservices architecture with a Node.js backend and Vue 3 frontend.
		</p>
		<p>
			After a successful two year run, AeonLabs was put on hiatus in 2020 and eventually wound down as COVID-19 and the global chip shortage made it impractical to source components in a timely and price effective manner.
		</p>
	</section>

	<section>
		<SectionHeader title="Gallery" />
		<PhotoGallery :images="images" />
	</section>
</template>

<script>
export default {
	data() {
		return {
			images: [
				{
					url: "/projects/aeonlabs/v3preview.png",
					caption: "AeonLabs v3"
				},
				{
					url: "/projects/aeonlabs/v3dash.webm",
					caption: "AeonLabs v3 (Video)"
				},
				{
					url: "/projects/aeonlabs/buildlab.png",
					caption: "Late BuildLab Prototype"
				},
				{
					url: "/projects/aeonlabs/m1proto.png",
					caption: "Milestone 1 Prototype"
				},
				{
					url: "/projects/aeonlabs/v1dash.png",
					caption: "Early v2 User Dashboard"
				},
				{
					url: "/projects/aeonlabs/aeonlabs-v1-indev-070919.png",
					caption: "Early v1 InDev User Dashboard"
				},
				{
					url: "/projects/aeonlabs/v1landing.png",
					caption: "Milestone 2 Landing Page"
				}
			]
		}
	}
};
</script>

<style lang="scss" scoped>
section {
	margin-bottom: 35px;

	> p:not(:last-of-type) {
		margin-bottom: 20px;
	}
}
</style>