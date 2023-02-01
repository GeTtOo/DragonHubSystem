import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/HomeView.vue')
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('@/views/AboutView.vue')
	},
	{
		path: '/block',
		name: 'block',
		component: () => import('@/views/BlockView.vue')
	}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
