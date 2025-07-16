<template>
	<Transition name="modal">
		<div v-if="isVisible" class="modal-root" @click.self="close">
			<div class="modal-content">
				<a class="close-button" @click="close">
					<IconFasXmark />
				</a>
				<slot></slot>
			</div>
		</div>
	</Transition>
	<Transition name="modal-overlay">
		<div v-if="isVisible" class="modal-overlay" />
	</Transition>
</template>

<script>
export default {
	name: 'Modal',
	props: {
		visible: {
			type: Boolean,
			required: true
		}
	},
	data() {
		return {
			isVisible: this.visible
		};
	},
	watch: {
		visible(newVal) {
			this.isVisible = newVal;
		}
	},
	methods: {
		close() {
			this.$emit('update:visible', false);
		}
	}
};
</script>

<style lang="scss" scoped>
.modal-root {
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
    height: 100%;
    inset-block-start: 0px;
    inset-block-end: 0px;
	padding: calc((2em + 6px) / 2);
    user-select: text;
    visibility: visible;
    overflow: auto;
	margin: auto;
	z-index: 9999;
	transition: 0.25s ease;
}

.modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, .2);
    -webkit-backdrop-filter: blur(40px);
    backdrop-filter: blur(40px);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9998;
	transition: opacity 0.25s cubic-bezier(.22, .56, .23, .89);
}

.modal-content {
	position: relative;
	display: flex;
    height: auto;
	padding: 15px;
    margin: auto;
    //flex-direction: column;
    //gap: 1.5rem;
    background: #1e1e1f;
	border: 1px solid #383838;
	border-radius: 14px;
	box-shadow: 0 24px 80px #00000040;
	//max-width: 620px;
    //border-radius: 24px;

	/*
	margin: 15px 12px;
	z-index: 2; */

	@include desktop {
		display: flex;
		justify-content: flex-start;
		align-items: stretch;
		gap: 35px;
    	max-width: 680px;
		padding: 30px;
		border-radius: 20px;
	}
}

.close-button {
	position: absolute;
    top: 15px;
    right: 15px;
    background: #2b2b2c;
    border-radius: 8px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fafafa;
    font-size: 1.125rem;
    opacity: 0.7;

	&:hover,
	&:focus {
		opacity: 1;
	}
}

:slotted(div), :slotted(span), :slotted(p),
:slotted(h1), :slotted(h2), :slotted(h3),
:slotted(h4), :slotted(h5), :slotted(h6) {
	font-family: "Mona Sans", "MonaSansFallback", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
	color: #fff;
	font-weight: 450;
    font-size: 1.125rem;
    line-height: 1.5;
    letter-spacing: 0em;
	animation: Modal-Content-Anim .6s cubic-bezier(.22,.56,.23,.89) .2s backwards;
}

:slotted(.title) {
	font-weight: 600;
	font-size: 2.5rem;
    line-height: 1.2;
    letter-spacing: -0.02em;
	animation: Modal-Title-Anim .6s cubic-bezier(.22,.56,.23,.89) backwards;
}

@keyframes Modal-Title-Anim {
    0% {
        transform: translateY(40px)
    }
}

@keyframes Modal-Content-Anim {
    0% {
        opacity: 0;
        transform: translateY(20px)
    }
}

/* Transition Styles */
.modal-enter-active,
.modal-leave-active,
.modal-overlay-enter-active,
.modal-overlay-leave-active {
	//transition: opacity 0.6s cubic-bezier(.22, .56, .23, .89), transform 0.6s cubic-bezier(.22, .56, .23, .89);
}

.modal-enter-from,
.modal-leave-to,
.modal-overlay-enter-from,
.modal-overlay-leave-to {
	//opacity: 0;
	//transform: translateY(80px);

	transform: scale(1.2);
    opacity: 0;
}

.modal-overlay-enter-from,
.modal-overlay-leave-to {
	transform: translateY(0);
}

.modal-enter-to,
.modal-leave-from,
.modal-overlay-enter-to,
.modal-overlay-leave-from {
	//opacity: 1;
	//transform: translateY(0);

	transform: scale(1);
    opacity: 1;
}
</style>