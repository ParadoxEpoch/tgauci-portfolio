<template>
	<nav class="navbar" ref="navbar">
		<transition name="fade"
			mode="out-in"
			@before-enter="beforeEnter"
      		@enter="enter"
      		@before-leave="beforeLeave"
      		@leave="leave"
		>
			<template v-if="$route.path.startsWith('/portfolio/')">
				<div class="nav-item">
					<RouterLink to="/portfolio" class="nav-link"><IconFasArrowLeft /> Return to Portfolio</RouterLink>
				</div>
			</template>
			<template v-else>
				<ul class="nav-list">
					<li class="nav-item">
						<RouterLink to="/" class="nav-link" activeClass="active">About</RouterLink>
					</li>
					<li class="nav-item">
						<RouterLink to="/portfolio" class="nav-link" activeClass="active">Portfolio</RouterLink>
					</li>
				</ul>
			</template>
		</transition>
	</nav>
</template>

<script>
export default {
	methods: {
		beforeEnter(el) {
			el.style.width = "0px";
		},
		enter(el) {
			el.offsetWidth; // force reflow
			el.style.width = (el.scrollWidth + 20) + "px";
			this.$refs.navbar.style.padding = "0px 20px";
		},
		beforeLeave(el) {
			el.style.width = (el.scrollWidth + 20) + "px";
		},
		leave(el) {
			el.offsetWidth; // force reflow
			el.style.width = "0px";
			this.$refs.navbar.style.padding = "0px 0px";
		}
	}
};
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
	transition: opacity 0.5s, width 0.5s, padding 0.5s;
}

.fade-enter, .fade-leave-to {
	opacity: 0;
}

nav.navbar {
	position: absolute;
	top: 0;
	right: 0;
	width: max-content;
    border-radius: 0 20px;
    padding: 0 20px;
	background: #2b2b2cbf;
    backdrop-filter: blur(10px);
    border: 1px solid #383838;
	border-top: 0;
    border-right: 0;
    z-index: 5;
	overflow: hidden;
	transition: padding 0.5s;

	.nav-list {
		display: flex;
    	flex-wrap: nowrap;
    	//justify-content: center;
    	align-items: center;
    	gap: 30px;
    	padding: 0 20px;
	}

	.nav-item {
		padding: 20px 7px;
		white-space: nowrap;
	}

	.nav-link {
		color: #d6d6d6;
		font-size: 0.9375rem;
		transition: color 0.25s ease;
		font-weight: 500;
		text-decoration: none;
		display: flex;
    	align-items: center;
		gap: 10px;

		&:hover {
			color: #d6d6d6b3;
		}

		&.active {
			color: $color-primary;
		}
	}

	@include mobile {
		position: fixed;
		bottom: 0px;
		top: unset;
		right: unset;
		width: 100%;
		left: 0px;
		border-radius: 20px 20px 0px 0px;
		padding: 0px 20px;
		display: flex;
		justify-content: center;
	}
}
</style>