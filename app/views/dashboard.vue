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
				this.$set(this, "user", JSON.parse(localStorage.getItem('user')));
			},
			getCharacterData: function() {
				console.log("getCharacterData fired.");
                let self = this    
				fetch('api/get_characters', {method: 'GET'})
				.then((response) => response.json())
				.then(response => { 
					console.log(response.name);
					self.$set(this, "character", response);
				})    
				.catch((errors) => {    
					console.log("Could not get characters");
					console.log(errors);
					this.$router.push('create'); 
				})    
			}
		}, 
		mounted() {    
			this.getUserData()
			this.getCharacterData()  
		}
    }
</script>