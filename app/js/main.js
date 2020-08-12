import Vue from 'vue/dist/vue.esm.browser'
import Router from 'vue-router/dist/vue-router.esm.browser'
import App from '../app.vue'
import Notfound from '../app.vue'
import Logout from '../views/logout.vue'
import Dashboard from '../views/dashboard.vue'
import Register from '../views/register.vue'

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
			path: '/logout',
			name: 'logout',
			component: Logout
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