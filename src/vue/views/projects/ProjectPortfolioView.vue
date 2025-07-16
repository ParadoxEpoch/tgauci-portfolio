<template>
	<BaseHeader title="Tristan's Portfolio" />
	<section>
		<SectionHeader title="Write Up" />
		<p>
			This portfolio site was built with Vue 3 and is designed to highlight my development experience and prior work.
			While it's a relatively simple site, there are a few tricks under the hood that I'd like to share.
		</p>
		<h3>Dynamic Years of Experience</h3>
		<p>
			Across various parts of the site, I refer to the number of years of experience I have with a particular technology etc.
		</p>
		<p>
			To keep this up to date and remove the need to manually update it, I use a simple function to dynamically calculate the number of years since a given date.
		</p>
		<MarkdownCode
			code="timeSince('2015-05-01')"
			language="javascript" />
		<p>
			This can easily be used within a template string, like so:
		</p>
		<MarkdownCode
			code="`I have ${timeSince('2015-05-01')} of experience with SCSS`"
			language="javascript" />
		<p>
			The function returns a string with natural language formatting that fits in with surrounding text. For example, <em>"nearly 9 years"</em> or <em>"over 2 years"</em>.
		</p>
		<h3>Email & Phone Obfuscation</h3>
		<p>
			You might have noticed my email address and contact number in the sidebar.
			<em>However,</em> these aren't quite as they seem.
			To prevent spam bots from scraping my contact information, they're decrypted using AES256 in the browser using JavaScript on load.
		</p>
		<p>
			While this means the AES key has to be loaded clientside, bots almost always scrape raw HTML, only rarely performing deobfuscation of trivial ciphers such as rot13/rot18 etc and almost never execute on page JavaScript; and using a fully clientside method of obfuscation allows me to keep the site totally static.
		</p>
		<h3>Animated Avatar</h3>
		<p>
			The animated avatar in the sidebar was created by recording various short scenes using the memoji tool in the iOS Messages app.
		</p>
		<p>
			Saving a memoji scene to Photos and exporting the original file via the Photos app on macOS preserves the video's alpha channel.
			While alpha channels in videos aren't widely supported, they do work in modern browsers under specific conditions.
		</p>
		<p>
			Chromium-based browsers (like Chrome and Edge) support playing VP9 encoded videos with an alpha channel.
			While Safari <em>can</em> play VP9 videos it doesn't support an alpha channel with the VP9 codec, causing the animation to appear with a black background.
			The solution is to export a second copy of the video with the HEVC codec, which is fully supported by Safari including alpha channel playback.
			Both sources are included in the video element, and the browser will select the best one to play based on its capabilities.
		</p>
		<p>
			To make the animation more dynamic and less repetitive, random pre-recorded scenes are played back to back.
			To mitigate the impact of a slow internet connection on load times and to make the effect more seamless, the next video is preloaded in a hidden video element while the active one plays.
			Once the current video is finished, the other video element is swapped in and played, and a new video is preloaded in the now hidden video element.
		</p>
		<p>
			If the animation gets distracting or annoying, you can click it and it'll pause. Clicking it again will resume playback.
		</p>
		<p>
			<em>Spoiler: There's a hidden animation that's scripted to only play on a <a href="nothingatall">404 page</a></em>
		</p>
		<h3>Accessibility</h3>
		<p>
			I use libraries like <a href="https://github.com/dequelabs/axe-core" target="_blank">axe-core</a> in conjunction with <a href="https://github.com/vue-a11y/vue-axe-next" target="_blank">vue-axe</a>, eslint plugins and other tools to help ensure my site complies with <strong>WCAG 2.1 AA</strong> accessibility standards at a minimum.
		</p>
	</section>
</template>

<style lang="scss" scoped>
section {
	margin-bottom: 35px;

	> p:not(:last-of-type) {
		margin-bottom: 20px;
	}
}

:deep(code) {
	margin-bottom: 20px;
}

h3 {
	margin-bottom: 20px;
	font-size: var(--fs-4);
    color: #fafafa;
    text-transform: capitalize;
    font-weight: bold;
}
</style>