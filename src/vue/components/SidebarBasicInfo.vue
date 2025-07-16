<template>
	<div class="info">

		<figure class="info__avatar">
			<SidebarAvatar />
		</figure>

		<div class="info__content">
			<h1 class="name">Tristan Gauci</h1>
			<a href="/resume.pdf" class="tag resume-download"><IconFasDownload /> Download Resume</a>
			<a href="#" class="tag contact-modal" @click="showContactModal = true"><IconFasPhone /> Resume & Info</a>
		</div>
	</div>
	<BaseModal v-model:visible="showContactModal">
		<ModalContentContact />
    </BaseModal>
</template>

<script>
import ModalContentContact from './ModalContentContact.vue';

export default {
	data() {
		return {
			showContactModal: false
		};
	}
};
</script>

<style lang="scss" scoped>
.info {
	position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
	flex-direction: column;
	gap: 25px;

	@include mobile {
		gap: 15px;
		flex-direction: row;
		justify-content: space-evenly;
	}

	&__avatar {
		/* background: linear-gradient(to bottom right, #3f3f40 3%, #303030 97%);
		border-radius: 30px; */
		display: flex;

		> img {
			width: 150px;
		}

		@include mobile {
			margin-left: -20px;
		}
	}

	&__content {
		display: flex;
    	flex-direction: column;
    	align-items: center;

		.name {
			color: #fafafa;
			font-size: 1.625rem;
			font-weight: 500;
			letter-spacing: -0.25px;
			margin-bottom: 15px;
			white-space: nowrap;
			text-align: center;

			@include mobile {
				font-size: 1.25rem;
				text-align: left;
				margin-bottom: 8px;
			}
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

			@include mobile {
				padding: 2px 9px;
				margin: 0;
			}

			&.contact-modal {
				@include desktop {
					display: none;
				}
			}

			&.resume-download {
				@include mobile {
					display: none;
				}
			}
		}
	}
}
</style>