<template>
	<BaseHeader title="RatchetHax" />

	<section class="button-container">
		<BaseButton href="https://github.com/ParadoxEpoch/RatchetHax/blob/main/docs/api.md" target="_blank"><IconFabGithub /> GitHub Repository</BaseButton>
		<BaseButton href="https://github.com/ParadoxEpoch/RatchetHax/blob/main/docs/api.md" target="_blank"><IconFabReadme /> API Docs</BaseButton>
	</section>

	<section>
		<SectionHeader title="About" />
		<img src="/projects/ratchethax/main.png" alt="RatchetHax Main Image" />
		<p>
			RatchetHax is a Node.js-based memory editor and trainer for the Ratchet & Clank series on PS2 and PS3.
		</p>
		<p>
			RatchetHax includes a standalone trainer via trainer.js that has various features like the ability to give yourself bolts, weapons etc, set the player's location and show the debug menu (in RC1).
		</p>
		<p>
			It can also be used in your own project to write scripts and game mods with JavaScript by importing Game.js into your project and using the included <a href="https://github.com/ParadoxEpoch/RatchetHax/blob/main/docs/api.md" target="_blank">API</a>.
		</p>
	</section>

	<section>
		<SectionHeader title="Trainer Usage" />
		<p>
			When you launch the trainer, it'll look for any running emulators on your system. If it finds any, you'll be able to choose one of them from a list. If no emulator processes were found, you'll be prompted to specify a process name or PID to attach the trainer to.
		</p>
		<img src="https://camo.githubusercontent.com/174c970d8d13fa64285f58ae5e058edbd39bf3dae04df17d09d877037b9e4237/68747470733a2f2f692e696d6775722e636f6d2f38787645496a702e706e67" alt="Trainer Process Selection" />
		<p>
			After selecting a process to attach to, the trainer will give you a list of supported games to choose from.
		</p>
		<img src="https://camo.githubusercontent.com/df7d2ee8afac4522939afaec15769da8e3b086668a7602302349743aed5dcd7b/68747470733a2f2f692e696d6775722e636f6d2f4b4464427861362e706e67" alt="Trainer Game Selection" />
		<p>
			After selecting a game from the list, the trainer will attach to the emulator and you'll be taken to the main menu.
		</p>
		<img src="https://camo.githubusercontent.com/467c9eaa045dfe785a910fb05155cede0ff72edf28ecca4ed1e11f72666d7461/68747470733a2f2f692e696d6775722e636f6d2f53737137796b4c2e706e67" alt="Trainer Main Menu" />
	</section>
</template>

<style lang="scss" scoped>
section {
	margin-bottom: 35px;

	> p:not(:last-of-type) {
		margin-bottom: 20px;
	}
}
</style>