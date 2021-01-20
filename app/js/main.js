import Vue from 'vue/dist/vue.esm.browser'
import Router from 'vue-router/dist/vue-router.esm.browser'
import App from '../app.vue'
import Notfound from '../app.vue'
import Dashboard from '../views/dashboard.vue'
import Register from '../views/register.vue'
import Create from '../views/character_create.vue'
import Character from '../views/character_edit.vue'
import Item from '../views/item_create.vue'
import Admin from '../views/admin.vue'

Vue.use(Router);

const router = new Router({
	mode: 'history',
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			component: App
		},
		{
			path: '/dashboard',
			name: 'dashboard',
			component: Dashboard
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
		{
			path: '*',
			name: '404',
			component: Notfound
		}
	]
});

new Vue({
	router,
	template: '<router-view></router-view>',
}).$mount('#app')