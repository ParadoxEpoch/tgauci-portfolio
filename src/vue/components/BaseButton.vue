<template>
	<a class="button">
		<slot />
	</a>
</template>

<style lang="scss" scoped>
.button {
	position: relative;
	width: max-content;
	background: linear-gradient(to bottom right,
			hsl(0, 0%, 25%) 0%,
			hsla(0, 0%, 25%, 0) 50%);
	color: hsl(45, 100%, 72%);
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	padding: 13px 20px;
	border-radius: 14px;
	font-size: 0.875rem;
	text-transform: capitalize;
	text-decoration: none;
	box-shadow: 0 16px 40px hsla(0, 0%, 0%, 0.25);
	z-index: 1;
	transition: 0.25s ease;

	&::before {
		content: "";
		position: absolute;
		inset: 1px;
		background: linear-gradient(to bottom right,
				hsla(240, 1%, 18%, 0.251) 0%,
				hsla(240, 2%, 11%, 0) 100%), hsl(240, 2%, 13%);
		border-radius: inherit;
		z-index: -1;
		transition: 0.25s ease;
	}

	&:hover {
		background: linear-gradient(to bottom right,
				hsl(45, 100%, 71%) 0%,
				hsla(36, 100%, 69%, 0) 50%);

		&::before {
			background: linear-gradient(135deg,
					hsla(45, 100%, 71%, 0.251) 0%,
					hsla(35, 100%, 68%, 0) 59.86%), hsl(240, 2%, 13%);
		}
	}

	&:disabled {
		opacity: 0.7;
		cursor: not-allowed;

		&:hover {
			background: linear-gradient(to bottom right,
					hsl(0, 0%, 25%) 0%,
					hsla(0, 0%, 25%, 0) 50%);

			&::before {
				background: linear-gradient(to bottom right, hsla(240, 1%, 18%, 0.251) 0%, hsla(240, 2%, 11%, 0) 100%), hsl(240, 2%, 13%);
			}
		}
	}
}
</style>