import Vue from 'vue/dist/vue.esm.browser'
import Router from 'vue-router'
import App from '../app.vue'
import info from '../views/info.vue'

/*
new Vue({
	el: '#app',
	render(h) {return h(App)}
})
*/
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/info'
    },
    {
      path: '/info',
      name: 'info',
      component: info
    }
  ]
});

new Vue({
	router,
	render: h => h(App),
  }).$mount('#app')