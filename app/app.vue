<template>
	<div class="example">
		{{ message }}
		<div>    
			<h2>Login</h2>    
			<form v-on:submit="login">    
				<input type="text" name="email" /><br>    
				<input type="password" name="password" /><br>    
				<input type="submit" value="Login" />    
			</form>    
		</div>
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
			let email = e.target.elements.email.value
			let password = e.target.elements.password.value 
			let login = () => {   
				let data = {    
					"email": email,    
					"password": password
				}
				//fetch('api/login', {method: 'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify(data)})
				fetch('api/login', {method: 'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify(data)})
					.then((response) => {    
						console.log("Vue got Response");
						console.log(response.data);
						this.$router.push('dashboard');
					})    
					.catch((errors) => {    
						console.log("Vue got Error");
						this.$router.push('logout');
					})    
			}    
			login()    
		}
	}
}
</script>