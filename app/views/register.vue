<template>
	<div class="section section--invert section--login">
    	<h2>Register</h2>
		<p class="small small--dimmed">Citizen ranking initiative is powered by Anni Corp. Anni Corp does not accept any liability directly or indirectly caused by its action or inaction.</p>
		<characterform @createOrUpdate="createOrUpdate"></characterform>
	</div>
</template>
  

<script>
import characterForm from '../../components/characterForm.vue';
export default {
  name: 'Register',
  components: {
    'characterform': characterForm
  },
  methods: {
    createOrUpdate: async function(character) {
    	//const res = await api.createtask(task);
		//this.$router.push(`/tasks/${res._id}`);
		fetch('/api/register', {method: 'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify(components.characterform)})
    }
  }
};
/*
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
}*/
</script>