import { createApp, h, Fragment } from 'vue';
import App from '@/App.vue';
import Router from '@/Router.js';

let app = null;
if (process.env.NODE_ENV === 'development') {
	const VueAxe = await import('vue-axe');
	app = createApp({
		render: () => h(Fragment, [h(App), h(VueAxe.VueAxePopup)])
	})
	app.use(VueAxe.default)
} else {
	app = createApp(App)
}

app.use(Router);

app.mount('#app');