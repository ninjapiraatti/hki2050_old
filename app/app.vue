<template>
	<div>
		<Login v-if='currentpath == "/"'/>
		<router-view />
		<Navigation />
	</div>
</template>

<script>
import Nav from '../components/nav.vue';
import Login from '../components/loginForm.vue';
export default {
	name: "App",
	data() {
		return {
			currentpath: this.$router.currentRoute.value.path
		}
	},
	components: {
		'Navigation': Nav,
		'Login': Login,
  	}
}
</script>