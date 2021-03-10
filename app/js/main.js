import { createApp } from 'vue'
import FlashMessage from '@smartweb/vue-flash-message';
import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Home from '../views/Home.vue'
import Notfound from '../views/Notfound.vue'
import Dashboard from '../views/Dashboard.vue'
import Register from '../views/Register.vue'
import Create from '../views/CharacterCreate.vue'
import Character from '../views/CharacterEdit.vue'
import Item from '../views/ItemCreate.vue'
import Admin from '../views/Admin.vue'
import Login from '../views/LoginForm.vue'

const router = createRouter({
	mode: 'history',
	linkActiveClass: 'active',
	history: createWebHistory(),
	routes: [
		{ path: '/', name: 'login', component: Login },
		{ path: '/home', name: 'home', component: Home },
		{ path: '/dashboard', name: 'dashboard', component: Dashboard },
		{ path: '/register', name: 'register', component: Register },
		{ path: '/create', name: 'create', component: Create },
		{ path: '/item', name: 'item', component: Item },
		{ path: '/admin', name: 'admin', component: Admin },
		{ path: '/character/:id', name: 'character', component: Character },
		{ path: '/:pathMatch(.*)*', component: Notfound },
	]
});

const app = createApp(App)
	.use(router)
	.use(FlashMessage)
router.isReady()
	.then(() => app.mount('#hki2050'))
