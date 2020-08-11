<template>
	<div>    
		<h2>Dashboard</h2>    
		<p>Name: {{ user.name }}</p>
		<a href="api/logout">logout</a>    
    </div>
</template>

<script> 
    export default {    
        name: "Dashboard",    
        data() {    
            return {
                user: {    
                    name: "User"    
                }    
            }    
        },   
        methods: {    
            getUserData: function() {
				console.log("dashboard.vue fired.");
                let self = this    
				fetch('api/user', {method: 'GET'})
				.then((response) => {   
					if (response.status != 200)
					throw new Error ("No good");
					console.log("dashboard.vue got response from api/user.");
					console.log("Response from user/api:" + response.user)    
					self.$set(this, "user", response.user)
				})    
				.catch((errors) => {    
					console.log("dashboard.vue got error from api/user.");
					console.log("Error from user/api:" + errors)    
					this.$router.push('/logout'); 
				})    
            }    
        },    
        mounted() {    
            this.getUserData()    
        }
    }
</script>