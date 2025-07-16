import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';

// Set root directory to project's src directory
const rootDir = fileURLToPath(new URL('./src', import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		Vue(),
		Components({
			dirs: [rootDir + '/vue/components'],
			deep: true,
			resolvers: [
				IconsResolver({
					prefix: 'icon',
					alias: {
						fas: 'fa6-solid',
						fab: 'fa6-brands'
					}
				})
			]
		}),
		Icons({
			autoInstall: true,
			scale: 1.0,
			defaultClass: 'svg-icon'
		})
	],
	optimizeDeps: {
		include: ['axe-core']
	},
	root: rootDir,
	resolve: {
		alias: {
			'@': rootDir + '/vue'
		}
	},
	build: {
		outDir: '../dist',
		//emptyOutDir: true
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "${rootDir}/vue/scss/_variables.scss";`
			}
		}
	}
})
