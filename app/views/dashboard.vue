<template>
	<div class="section section--invert dashboard">    
		<h2>Dashboard</h2>    
		<p>Name: {{ user.username }}</p>
		<a href="api/logout">Log out</a><br />
		<a href="/create">Create character</a>
		<h3>Characters</h3>
		<ul class="grid grid--gutter characters">
			<li v-for="character in characters" :key="character.name" class="character">
				<img :src="character.image" alt="">
				<router-link :to="{ name: 'character', params: { id: character._id }}">{{ character.name }}</router-link>
				{{ character.dem }}
			</li>
		</ul>
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
				characters: [

				]
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
					console.log(response);
					self.$set(this, "characters", response);
				})    
				.catch((errors) => {    
					console.log("Could not get characters");
					console.log(errors);
					//this.$router.push('/create'); 
				})    
			}
		}, 
		mounted() {    
			this.getUserData()
			this.getCharacterData()  
		}
    }
</script>