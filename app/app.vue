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
	name: "Login",
	methods: {
		login: (e) => {    
                e.preventDefault()    
                let email = "user@email.com"   
                let password = "password"    
                let login = () => {    
                    let data = {    
                        email: email,    
                        password: password    
					}
					fetch('/login', {method: 'POST', body: data})
                        .then((response) => {    
                            console.log("Logged in")    
                        })    
                        .catch((errors) => {    
                            console.log("Cannot log in")    
                        })    
                }    
                login()    
            } 
	}
}
</script>