<template>
	<div>
		<div v-if='currentpath == "/"' class="section section--hero">
			<div class="logo-splash">
				<img src="/assets/images/logo_hki2050.png" alt="">
				<p>Welcome {{ user.username }}.</p>
			</div>
		</div>
		<div v-if='currentpath == "/"' class="section section--login">
			<h2>Login</h2>    
			<form v-on:submit="login">
				<ul class="form-fields">
					<li class="form-field"><input type="text" placeholder="adamjensen" name="username" /></li> 
					<li class="form-field"><input type="password" placeholder="password" name="password" /></li>    
					<li class="form-field"><input type="submit" class="button" value="Login" /></li>
				</ul>
			</form> 
		</div>
		<router-view />
		<navigation />
	</div>
</template>

<script>
import Nav from '../components/nav.vue';
export default {
	name: "App",
	components: {
		'navigation': Nav
  	},
	data() {
		return {
			postId: null,
			user: {
                username: ""    
			},
			currentpath: this.$router.currentRoute.path
		};
	},
	methods: {
		login: async function(e) {
		//login: (e) => {    
			e.preventDefault()    
			let username = e.target.elements.username.value
			let password = e.target.elements.password.value 
			let login = () => {   
				let data = {    
					"username": username,    
					"password": password
				}
				//fetch('api/login', {method: 'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify(data)})
				fetch('api/login', {method: 'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify(data)})
					.then((response) => response.json())
					.then((response) => {    
						console.log("Vue got Response");
						console.log("Response data: " + response);
						localStorage.setItem('user', JSON.stringify(response));
						console.log(JSON.parse(localStorage.getItem('user')));
						this.$router.push('dashboard');
					})    
					.catch((errors) => {    
						console.log("Vue got Error");
						console.log("Error data: " + response);
						this.flash('Validation failed', 'error');
						this.$router.push('logout');
					})    
			}    
			login()    
		},
		getUserData: function() {
			console.log("getUserData fired.");
			this.$set(this, "user", JSON.parse(localStorage.getItem('user')));
		}
	},
	mounted() {    
		this.getUserData()
	}
}
</script>