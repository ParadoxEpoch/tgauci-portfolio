import { createRouter, createWebHistory } from 'vue-router';
import AboutView from './views/AboutView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
	scrollBehavior() {
		return { top: 0 }
	},
    routes: [
        {
            path: '/',
            name: 'about',
            component: AboutView
        },
		{
            path: '/portfolio',
            name: 'portfolio',
            component: () => import('./views/PortfolioView.vue')
        },
		{
			path: '/portfolio/gauci',
			name: 'project-gauci',
			component: () => import('./views/projects/ProjectPortfolioView.vue'),
		},
		{
			path: '/portfolio/aeonlabs',
			name: 'project-aeonlabs',
			component: () => import('./views/projects/ProjectAeonlabsView.vue'),
		},
		{
			path: '/portfolio/neuralab',
			name: 'project-neuralab',
			component: () => import('./views/projects/ProjectNeuralabView.vue'),
		},
		{
			path: '/portfolio/nebula-hosting',
			name: 'project-nebulahosting',
			component: () => import('./views/projects/ProjectHostingView.vue'),
		},
		{
			path: '/portfolio/ratchethax',
			name: 'project-ratchethax',
			component: () => import('./views/projects/ProjectRatchethaxView.vue'),
		},
		{
			path: '/portfolio/casino-manager',
			name: 'project-casinomgr',
			component: () => import('./views/projects/ProjectCasinomgrView.vue'),
		},
		{
            path: '/:pathMatch(.*)',
            name: 'not-found',
            component: () => import('./views/NotFoundView.vue')
        }
    ]
});

export default router;