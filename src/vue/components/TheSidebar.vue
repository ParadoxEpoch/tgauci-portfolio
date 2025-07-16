<template>
	<aside class="sidebar">
		<BaseCard>
			<SidebarBasicInfo />
			<div class="separator"></div>
			<span class="sidebar__desktop">
				<SidebarContactInfo />
				<SidebarSocialLinks />
			</span>
		</BaseCard>
	</aside>
</template>

<script>
import SidebarSocialLinks from './SidebarSocialLinks.vue';

</script>

<style lang="scss" scoped>
.sidebar {
	position: sticky;
    top: 5%;
    max-height: max-content;
    height: 100%;
    margin-bottom: 0;
    padding-top: 0px;
    z-index: 10;

	.separator {
		margin: 32px 0;
		width: 100%;
    	height: 1px;
    	background: #383838;

		@include mobile {
			display: none;
		}
	}

	@include mobile {
		position: relative;
	}

	&__desktop {
		@include mobile {
			display: none;
		}
	}
}
</style>