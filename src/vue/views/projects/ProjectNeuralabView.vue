<template>
	<BaseHeader title="NeuraLab" />

	<section class="button-container">
		<BaseButton href="https://neuralab.ai" target="_blank"><IconFasArrowUpRightFromSquare /> Visit NeuraLab</BaseButton>
	</section>

	<section>
		<SectionHeader title="About" />
		<p>
			NeuraLab is an advanced chatbot platform that redefines what an AI chatbot can be.
			NeuraLab's flagship AI assistant, Neura, can help with everything from generating images and fetching real-time information from the web to finding local businesses with Yelp and summarizing long videos.
			Neura sees and understands text, images, audio and video and can respond in kind.
		</p>
		<!-- <div>
			<img src="/projects/neuralab/app1.png" alt="NeuraLab App Image 1" style="float: left; max-width: 50%;" />
			<img src="/projects/neuralab/app2.png" alt="NeuraLab App Image 2" style="float: right; max-width: 50%;" />
		</div> -->
	</section>

	<section>
		<SectionHeader title="Origins" />
		<img src="/projects/neuralab/app4.png" alt="NeuraLab image recognition" style="float: right; max-width: 40%; margin-left: 20px;" />
		<p>
			NeuraLab started in 2023 as a personal side project intended to improve my skills in Vue 3 by building the entire Web UI from the ground up around Vue 3, Vue Router and Vuex.
		</p>
		<p>
			The project began the same morning that OpenAI released their first public API for GPT-3.5 as a functional chatbot prototype capable of interacting with users via Facebook Messenger.
		</p>
		<p>
			A CLI-based chatbot with multiple "personas" and a non-functional web UI concept followed a few days later.
			Over the next month, a backend API was developed and the web UI was made functional with support for response streaming, markdown rendering, image generation, user authentication and more.
		</p>
	</section>

	<section>
		<SectionHeader title="Today" />
		<img src="/projects/neuralab/app5.png" alt="NeuraLab app notification" style="float: left; max-width: 50%;" />
		<p>
			Since then, NeuraLab has interatively grown into a fully-fledged AI chatbot platform with nearly a dozen tool integrations, a cross-platform web native mobile app based around Capacitor and has been on the cutting edge of new advancements in interacting with LLMs.
		</p>
	</section>

	<section>
		<div style="float: right; max-width: 50%; margin-left: 20px;">
			<video style="border-radius: 8px;" controls autoplay loop muted playsinline>
				<source src="/projects/neuralab/functioncalling.mp4" type="video/mp4">
				Your browser does not support the video tag.
			</video>
			<div class="annotation">
				<span>NeuraLab's custom function calling in action</span>
				<a class="out-link" href="/projects/neuralab/functioncalling.mp4" target="_blank" aria-label="View video"><IconFasArrowUpRightFromSquare /></a>
			</div>
		</div>
		<SectionHeader title="Custom Function Calling" />
		<p>
			NeuraLab was among the first LLM-based chatbot platforms <i style="font-size: 0.9em">(maybe even <strong>the</strong> first)</i> to implement custom function calling and web search, long before their introduction into the OpenAI API.
		</p>
		<p>
			This means NeuraLab could search the web, generate images and communicate with third-party APIs before ChatGPT and other competing platforms could.
		</p>
		<p>
			The custom function calling implementation worked using few shot learning in the system prompt to instruct the model to use a special syntax in its response to call functions which the backend would detect, parse and execute before returning the result to the model in a subsequent message.
		</p>
	</section>

	<section>
		<SectionHeader title="Gallery" />
		<PhotoGallery :images="images" />
	</section>
</template>

<script>
export default {
	data() {
		return {
			images: [
				{
					url: "/projects/neuralab/app1-alt.png",
					caption: "Explore (iOS App)",
					offsetPosition: "0% 42%"
				},
				{
					url: "/projects/neuralab/app3-alt.png",
					caption: "New Chat (iOS App)",
					offsetPosition: "0% 13%"
				},
				{
					url: "/projects/neuralab/web1.png",
					caption: "Explore (Web)"
				},
				{
					url: "/projects/neuralab/web3.png",
					caption: "New Chat (Web)"
				},
				{
					url: "/projects/neuralab/web2.png",
					caption: "Code Rendering"
				},
				{
					url: "/projects/neuralab/ionic1.png",
					caption: "Ionic Prototype (Settings)",
					offsetPosition: "0% 6%"
				},
				{
					url: "/projects/neuralab/ionic2.png",
					caption: "Ionic Prototype (Chat)",
					offsetPosition: "0% 76%"
				}
			]
		}
	}
};
</script>

<style lang="scss" scoped>
section {
	margin-bottom: 35px;

	> p:not(:last-of-type) {
		margin-bottom: 20px;
	}
}

.out-link {
	color: $color-primary;
	text-decoration: none;
	font-weight: bold;
	:deep(svg) {
		display: flex;
	}
}

.annotation {
	font-size: 0.9rem;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 10px;
}
</style>