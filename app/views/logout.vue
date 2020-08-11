<template>
	<div class="example">
		{{ message }}
		<a href="api/logout">logout</a>    
	</div>
</template>
  

<script>
export default {
	name: "Logout",
	data () {
		return {
			message: "Nope nope nope"
		}
	}
}
</script>