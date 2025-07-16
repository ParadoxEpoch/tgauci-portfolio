<template>
	<BaseHeader title="Casino Manager" />

	<section class="button-container">
		<BaseButton href="https://github.com/ParadoxEpoch/casino-table-manager" target="_blank"><IconFabGithub /> GitHub Repository</BaseButton>
		<BaseButton href="https://github.com/ParadoxEpoch/casino-table-manager/releases/tag/v1.0.0" target="_blank"><IconFasDownload /> Download Casino Manager</BaseButton>
	</section>

	<section>
		<SectionHeader title="About" />
		<p>
			Casino Manager is a small tool that I developed to help manage and improve the experience of playing at-home Roulette with friends and family.
		</p>
		<p>
			It's cross-platform, launching a server on the host machine and allowing the manager/dealer to connect via a web browser on their phone or tablet to confirm spins, manage table betting limits, and view the current state of the table.
		</p>
		<p>
			Once the dealer has confirmed a spin, the result (along with hot and cold numbers) is updated and sent to the "table" screen which can be a TV, monitor or tablet setup in the room for all players to view.
			The table UI also runs via a web browser, making it easy to set up and use. <em>Hint: A Microsoft Surface Pro rotated vertically makes a perfect table screen!</em>
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
					url: "/projects/casinomgr/dealer.png",
					caption: "Dealer / Manager View"
				},
				{
					url: "/projects/casinomgr/table.png",
					caption: "Table Ambient View"
				},
				{
					url: "/projects/casinomgr/cli.png",
					caption: "Casino Manager CLI"
				},
				{
					url: "/projects/casinomgr/wheel.webm",
					caption: "Roulette Wheel Animation"
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