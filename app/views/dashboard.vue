<template>
	<div class="section dashboard">    
		<h2>Dashboard</h2>    
		<p>Name: {{ user.username }}</p>
		<a href="api/logout">Log out</a><br />
		<a href="/create">Create character</a><br />
		<a v-if="user._id == '5f365f89f8740c082db27b5a'" href="/create">Create item</a>
		<h3>Characters</h3>
		<ul class="grid grid--gutter characters">
			<li v-for="character in characters" :key="character.name" class="character">
				<div class="character__wrapper">
					<img :src="character.image" alt="">
					<h2 class="h2"><router-link :to="{ name: 'character', params: { id: character._id }}">{{ character.name }}</router-link></h2>
					{{ character._id }}
				</div>
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
				this.user = JSON.parse(localStorage.getItem('user'))
			},
			getCharacterData: function() {
				console.log("getCharacterData fired.");   
				fetch('api/get_characters', {method: 'GET'})
				.then((response) => response.json())
				.then(response => { 
					console.log(response);
					this.characters = response;
					this.$flashMessage.show({
						type: 'success',
						title: 'Successfully fetched characters',
						time: 1000
					});
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