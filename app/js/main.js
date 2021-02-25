import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from '../app.vue'
import Home from '../views/home.vue'
import Notfound from '../views/notfound.vue'
import Dashboard from '../views/dashboard.vue'
import Register from '../views/register.vue'
import Create from '../views/character_create.vue'
import Character from '../views/character_edit.vue'
import Item from '../views/item_create.vue'
import Admin from '../views/admin.vue'

const router = createRouter({
	mode: 'history',
	linkActiveClass: 'active',
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: App,
			children: [
				{ path: '/home', name: 'home', component: Home },
				{ path: '/dashboard', name: 'dashboard', component: Dashboard },
				{ path: '/register', name: 'register', component: Register },
				{ path: '/create', name: 'create', component: Create },
				{ path: '/item', name: 'item', component: Item },
				{ path: '/admin', name: 'admin', component: Admin },
				{ path: '/character/:id', name: 'character', component: Character },
				{ path: '/:pathMatch(.*)*', component: Notfound },
			]
		},
		/*
		{
			path: '/dashboard',
			name: 'dashboard',
			component: Dashboard
		},
		{
			path: '/home',
			name: 'home',
			component: Home
		},
		{
			path: '/register',
			name: 'register',
			component: Register
		},
		{
			path: '/create',
			name: 'create',
			component: Create
		},
		{
			path: '/item',
			name: 'item',
			component: Item
		},
		{
			path: '/character/:id',
			name: 'character',
			component: Character
		},
		{
			path: '/admin',
			name: 'admin',
			component: Admin
		},
		*/
	]
});

const app = createApp(App)
	.use(router)
router.isReady()
	.then(() => app.mount('#hki2050'))

/*
new Vue({
	router,
	template: '<router-view></router-view>',
}).$mount('#hki2050')
*/