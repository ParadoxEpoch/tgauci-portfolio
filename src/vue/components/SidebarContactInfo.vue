<template>
	<ul class="contacts-list">
		<li class="contact-item">
			<div class="icon-box">
				<IconFasEnvelope />
			</div>
			<div class="contact-info">
				<p class="contact-title">Email</p>

				<a :href="mailtoLink" class="contact-link" aria-label="Email">{{ email }}</a>
			</div>
		</li>

		<li class="contact-item">
			<div class="icon-box">
				<IconFasMobileScreen />
			</div>
			<div class="contact-info">
				<p class="contact-title">Phone</p>

				<a :href="telLink" class="contact-link" aria-label="Phone">{{ phone }}</a>
			</div>
		</li>

		<li class="contact-item">
			<div class="icon-box">
				<IconFasCalendarDays />
			</div>
			<div class="contact-info">
				<p class="contact-title">Experience</p>

				<span class="contact-text">{{ experienceYears }}</span>
			</div>
		</li>

		<li class="contact-item">
			<div class="icon-box">
				<IconFasLocationDot />
			</div>
			<div class="contact-info">
				<p class="contact-title">Location</p>
				<address>Melbourne, Australia</address>
			</div>
		</li>
	</ul>
</template>

<script>
import Aes from "@/lib/aes.js";

export default {
	data() {
		return {
			experienceYears: (() => {
				const date = new Date("2010-06-15");
				const now = Date.now();
				const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25; // Consider leap years
				const elapsedMilliseconds = now - date;
				const yearsElapsed = Math.round(elapsedMilliseconds / millisecondsInYear);
				
				return `${yearsElapsed} Years`;
			})(),
			email: "",
			phone: ""
		};
	},
	computed: {
		mailtoLink() {
			if (!this.email?.includes("@")) return "#";
			return `mailto:${this.email}`;
		},
		telLink() {
			if (!this.phone?.includes("+")) return "#";
			return `tel:${this.phone.replaceAll(" ", "")}`;
		}
	},
	async mounted() {
		const aes = new Aes("tvA297m7J4Ez8UPIYxHoudybTV4RAkr18Ko6dxCzb58");

		try {
			this.email = await aes.decrypt("xxg-cIE2BBMEOTAX-XzM8XP-urU");
		} catch (error) {
			console.error("Error decrypting email:", error.message);
			this.email = "Failed to load";
		}

		try {
			this.phone = await aes.decrypt("bl9fvHXk-0QsEKHQYrrqriyG");
		} catch (error) {
			console.error("Error decrypting phone:", error.message);
			this.phone = "Failed to load";
		}
	},
};
</script>

<style lang="scss" scoped>
.contacts-list {
	display: grid;
	gap: 30px 15px;
	grid-template-columns: 1fr;

	& .contact-item {
		min-width: 100%;
    	display: flex;
    	align-items: center;
    	gap: 16px;

		.icon-box {
			position: relative;
			background: linear-gradient(to bottom right, #404040 0%, #40404000 50%);
			display: flex;
			justify-content: center;
			align-items: center;
			color: $color-primary;
			box-shadow: -4px 8px 24px hsla(0, 0%, 0%, 0.125);
			z-index: 1;
			width: 48px;
			height: 48px;
			border-radius: 12px;
			font-size: 1.125rem;

			&::before {
				content: "";
				position: absolute;
				inset: 1px;
				background: #202022;
				border-radius: inherit;
				z-index: -1;
			}
		}

		.contact-info {
			max-width: calc(100% - 64px);
    		width: calc(100% - 64px);
			display: flex;
    		flex-direction: column;

			.contact-title {
				color: #d6d6d6b3;
				font-size: 0.75rem;
				text-transform: uppercase;
				margin-bottom: 2px;
			}

			.contact-link, .contact-text, address {
				font-style: normal;
				color: #fafafa;
				font-size: 0.875rem;
				font-weight: 400;
			}

			.contact-link {
				text-decoration: none;
				white-space: nowrap;
        		overflow: hidden;
        		text-overflow: ellipsis;
			}
		}
	}
}
</style>