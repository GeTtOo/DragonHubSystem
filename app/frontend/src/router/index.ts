import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/:pathMatch(.*)*',
		name: '404',
		component: () => import('@/views/NotFoundView.vue')
	},
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
	},
	{
		path: '/admin',
		name: 'admin',
		component: () => import('@/views/admin/MainView.vue')
	},
	{
		path: '/users',
		name: 'users',
		component: () => import('@/views/admin/UsersView.vue')
	},
	{
		path: '/user/:id(\\d+)',
		name: 'user',
		component: () => import('@/views/UserView.vue')
	}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
