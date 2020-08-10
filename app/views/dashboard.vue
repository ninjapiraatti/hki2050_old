<template>
	<div>    
		<h2>Dashboard</h2>    
		<p>Name: {{ user.name }}</p>    
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
				console.log("api/user trying to do something.");
                let self = this    
				fetch('api/user', {method: 'GET'})
                    .then((response) => {    
						console.log("api/user got a response.");
                        console.log(response.data.user)    
                        self.$set(this, "user", response.data.user)    
                    })    
                    .catch((errors) => {    
						console.log("api/user got an error.");
                        console.log(errors)    
                        this.$router.push('/logout'); 
                    })    
            }    
        },    
        mounted() {    
            this.getUserData()    
        }    
    }
</script>