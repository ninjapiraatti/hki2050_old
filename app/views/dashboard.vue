<template>
	<div class="section section--invert">    
		<h2>Dashboard</h2>    
		<p>Name: {{ user.username }}</p>
		<a href="api/logout">logout</a>
		<h3>Characters</h3>
		<div>{{ character.name }}</div>   
    </div>
</template>

<script> 
    export default {    
        name: "Dashboard",    
        data() {    
            return {
                user: {    
                    username: "User"    
				},
				character: {
					name: "Adam Jensen"
				}
            }    
        },   
        methods: {    
            getUserData: function() {
				console.log("getUserData fired.");
                let self = this    
				fetch('api/user', {method: 'GET'})
				.then((response) => response.json())
				.then(response => { 
					//if (response.status != 200)
					//throw new Error ("No good");
					console.log(JSON.parse(localStorage.getItem('user')));
					console.log("dashboard.vue got response from api/user.");
					self.$set(this, "user", JSON.parse(localStorage.getItem('user')));
					//self.$set(this, "user", JSON.parse(localStorage.getItem('user')));
				})    
				.catch((errors) => {    
					console.log("dashboard.vue got error from api/user.");
					console.log("Error from user/api:" + errors)    
					this.$router.push('/logout'); 
				})    
			},
			getCharacterData: function() {
				console.log("getCharacterData fired.");
                let self = this    
				fetch('api/get_characters', {method: 'GET'})
				.then((response) => response.json())
				.then(response => { 
					self.$set(this, "character", JSON.parse(response));
				})    
				.catch((errors) => {    
					console.log("Could not get characters");
					this.$router.push('/logout'); 
				})    
			}
		}, 
		mounted() {    
			this.getUserData()
			this.getCharacterData()  
		}
    }
</script>