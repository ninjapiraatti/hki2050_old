import Vue from 'vue/dist/vue.esm.browser'
import Router from 'vue-router/dist/vue-router.esm.browser'
import App from '../app.vue'
import Notfound from '../app.vue'
import Dashboard from '../views/dashboard.vue'
import Insert from '../views/insert.vue'

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
			path: '/insert',
			name: 'insert',
			component: Insert
		},
		/*
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		*/
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