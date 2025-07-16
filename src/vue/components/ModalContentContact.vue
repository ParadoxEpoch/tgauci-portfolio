<template>
	<div style="display: flex; flex-direction: column;">
		<h4 class="modal-title">Contact Me</h4>
		<div style="margin: 0 2rem">
			<SidebarContactInfo />
		</div>
		<a href="/resume.pdf" class="tag"><IconFasDownload /> Download Resume</a>
		<SidebarSocialLinks />
	</div>
</template>

<style lang="scss" scoped>
.modal-title {
	margin-bottom: 1em;
	font-size: 1.5rem;
    color: #fafafa;
	font-weight: bold;
}

.tag {
	color: #fff;
	background: #2b2b2c;
	font-size: 0.75rem;
	font-weight: 300;
	width: max-content;
	padding: 5px 18px;
	border-radius: 8px;
	margin: auto;
	display: flex;
	align-items: center;
	gap: 10px;
	text-decoration: none;
	margin-top: 35px;
}
</style>