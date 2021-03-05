<template>
	<div>
		<router-view />
		<Navigation />
	</div>
</template>

<script>
import Nav from '../components/nav.vue';
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