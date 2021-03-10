<template>
	<div>
		<FlashMessage position="right top" />
		<router-view />
		<Navigation />
	</div>
</template>

<script>
import Nav from '../components/Nav.vue';
export default {
	name: "App",
	data() {
		return {
			currentpath: this.$router.currentRoute.value.path
		}
	},
	components: {
		'Navigation': Nav,
  	}
}
</script>