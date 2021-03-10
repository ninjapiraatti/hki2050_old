<template>
	<div>
		<div class="section section--hero">
			<div class="logo-splash">
				<img src="/assets/images/logo_hki2050.png" alt="">
				<p>Welcome {{ user.username }}.</p>
			</div>
		</div>
		<div class="section section--login">
			<h2>Login</h2>    
			<form v-on:submit="login">
				<ul class="form-fields">
					<li class="form-field"><input type="text" placeholder="adamjensen" name="username" /></li> 
					<li class="form-field"><input type="password" placeholder="password" name="password" /></li>    
					<li class="form-field"><input type="submit" class="button" value="Login" /></li>
				</ul>
			</form> 
		</div>
	</div>
</template>

<script> 
export default {
	name: "Login",
	data() {
		return {
			postId: null,
			user: {
                username: ""    
			},
		};
	},
	methods: {
		login: async function(e) { 
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
					this.$flashMessage.show({
						type: 'success',
						title: 'Successfully logged in',
						time: 1000
					});
					this.$router.push({path: '/dashboard'});
				})
				.catch((errors) => {
					//console.log("Vue got Error");
					//console.log("Error data: " + errors);
					this.$flashMessage.show({
						type: 'error',
						title: 'Incorrect credentials',
						time: 1000
					});
					console.log("About to log out")
					this.$router.push({path: '/api/logout'});
				})    
			}    
			login()    
		},
		getUserData: function() {
			console.log("getUserData fired.")
			this.user = JSON.parse(localStorage.getItem('user'))
		}
	},
	mounted() {
		this.getUserData()
	}
}
</script>