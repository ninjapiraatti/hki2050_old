<template>
	<div class="section section--invert section--login">
		{{ message }}
		<h2>Login</h2>    
		<form v-on:submit="login">
			<ul class="form-fields">
				<li class="form-field"><input type="text" placeholder="adamjensen" name="username" /></li> 
				<li class="form-field"><input type="password" placeholder="password" name="password" /></li>    
				<li class="form-field"><input type="submit" class="button" value="Login" /></li>
			</ul>
		</form>    
	</div>
</template>

<script>
export default {
	name: "App",
	data() {
		return {
			postId: null
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
						//console.log("Response data: " + response);
						console.log(response);
						localStorage.setItem('user', JSON.stringify(response));
						this.$router.push('dashboard');
					})    
					.catch((errors) => {    
						console.log("Vue got Error");
						console.log("Error data: " + response);
						this.$router.push('logout');
					})    
			}    
			login()    
		}
	}
}
</script>