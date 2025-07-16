<template>
	<main>
		<TheSidebar />
		<BaseCard class="main-content">
			<TheNav />
			<article>
				<RouterView />
			</article>
		</BaseCard>
	</main>
</template>

<style lang="scss">
@import url("https://cdn.jsdelivr.net/gh/jgthms/minireset.css@master/minireset.min.css");
@import "scss/fonts";

:root {
	//color-scheme: dark;
	text-wrap: pretty;
	-webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

	/* Typography */
	--fs-1: 32px;
	--fs-2: 26px;
	--fs-3: 24px;
	--fs-4: 18px;
	--fs-5: 15px;
	--fs-6: 15px;
	--fs-7: 15px;
	--fs-8: 12px;

	@include mobile {
		--fs-1: 24px;
		--fs-2: 19px;
		--fs-3: 17px;
		--fs-4: 16px;
		--fs-6: 14px;
		--fs-7: 13px;
		--fs-8: 11px;
	}
}

* {
	box-sizing: border-box;
	-webkit-font-smoothing: antialiased;
}

body {
	background-color: $body-background;
    color: #bcb0c7;
	font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
}

#app {
	@include desktop {
		&::-webkit-scrollbar {
			width: 10px;
			height: 10px;
			transition: 1.0s;
		}

		&::-webkit-scrollbar-thumb {
			background-color: rgba(127, 127, 127, 0.6);
			background-clip: padding-box;
			border: 2px solid transparent;
			border-radius: 5px;
			transition: 1.0s;

			&:hover {
				background-color: rgb(110, 110, 110);
				transition: 0.3s;
			}
		}

		&::-webkit-scrollbar-track {
			background-color: #1e1e20b3;
		}
	}
}

main {
	max-width: 1200px;
	margin-inline: auto;
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 25px;

	margin: 60px auto;

	@include mobile {
		flex-direction: column;
		margin: 15px 12px;
    	margin-bottom: 75px;
		gap: 15px;
	}
}

a {
	color: #03A9F4;
}

p {
	color: #d6d6d6;
	margin-top: 0;
    margin-bottom: 0;
}

.is-hidden {
	display: none !important;
}

.main-content {
	position: relative;
	//width: 100%;
	min-width: 75%;
    width: 75%;
    margin: 0;

	@include mobile {
		width: 100%;
	}
}

.button-container {
	display: flex;
	gap: 10px;
	flex-wrap: wrap;
}
</style>
