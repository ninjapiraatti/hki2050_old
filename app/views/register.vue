<template>
	<div class="section section--invert section--login">
		{{ message }}
		<h2>Register</h2>
		<p class="small small--dimmed">Citizen ranking initiative is powered by Anni Corp. Anni Corp does not accept any liability directly or indirectly caused by its action or inaction.</p>
		<form>
			<ul class="form-fields">
				<li class="form-field"><input type="text" placeholder="Your Name" name="name" /></li>
				<li class="form-field"><input type="text" placeholder="adamjensen@tor.com" name="email" /></li> 
				<li class="form-field"><input type="password" placeholder="password" name="password" /></li>
				<li class="form-field"><input type="password" placeholder="password again" name="password_verify" /></li>
				<li class="form-field"><textarea placeholder="Bio" name="bio" /></li>
				<li class="form-field"><input type="number" placeholder="Strength" name="strength" /></li>
				<li class="form-field"><input type="number" placeholder="Perception" name="perception" /></li> 
				<li class="form-field"><input type="number" placeholder="Endurance" name="endurance" /></li> 
				<li class="form-field"><input type="number" placeholder="Charisma" name="charisma" /></li> 
				<li class="form-field"><input type="number" placeholder="Intelligence" name="intelligence" /></li> 
				<li class="form-field"><input type="number" placeholder="Agility" name="agility" /></li> 
				<li class="form-field"><input type="number" placeholder="Luck" name="luck" /></li> 
				<li class="form-field"><input type="submit" class="button" value="Login" /></li>
			</ul>
		</form>    
	</div>
</template>
  

<script>
export default {
	name: "Register",
	data () {
		return {
			message: "Insert data!"
		}
	},
	methods: {
		consoleLog: function() {
			console.log("Moro");
		},
		insertData: async function() {
			fetch('/api/insert', {method: 'POST'}).then(data => data.json())
			.then(da => console.log(da))
		}
	}
}
</script>