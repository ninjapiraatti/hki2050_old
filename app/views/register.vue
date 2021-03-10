<template>
	<div class="section  section--login">
    	<h2>Register</h2>
		<p class="small small--dimmed">Citizen ranking initiative is powered by Anni Corp. Anni Corp does not accept any liability directly or indirectly caused by its action or inaction.</p>
		<userform @createOrUpdate="createOrUpdate"></userform>
	</div>
</template>
  

<script>
import userForm from '../../components/UserForm.vue';
export default {
  name: 'Register',
  components: {
    'userform': userForm
  },
  methods: {
    createOrUpdate: async function(user) {
		fetch('/api/register', {method: 'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify(user)})
    }
  }
};
</script>