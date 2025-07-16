<template>
	<ul class="social-list">
		<li>
			<a href="https://github.com/paradoxepoch" target="_blank" class="social-link" aria-label="GitHub Profile">
				<IconFabGithub />
			</a>
		</li>

		<li>
			<a href="https://www.linkedin.com/in/tristangauci" target="_blank" class="social-link" aria-label="LinkedIn Profile">
				<IconFabLinkedin />
			</a>
		</li>

		<li>
			<a href="https://www.seek.com.au/profile/tristan-gauci-BR0lCkJM5R" target="_blank" class="social-link" aria-label="Seek Profile">
				<IconFasBriefcase />
			</a>
		</li>
	</ul>
</template>

<style lang="scss" scoped>
.social-list {
	display: flex;
    align-items: center;
	justify-content: center;
    gap: 15px;
	margin-top: 35px;

	.social-link {
		color: #d6d6d6b3;
    	font-size: 1.125rem;

		&:hover {
			color: #d6d6d6;
		}
	}
}
</style>