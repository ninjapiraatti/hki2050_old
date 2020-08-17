<template>
	<div class="section section--invert section--login">
    	<h2>Register to CRI</h2>
		<p class="small small--dimmed">Citizen ranking initiative is powered by Anni Corp. Anni Corp does not accept any liability directly or indirectly caused by its action or inaction.</p>
		<characterform @createOrUpdate="createOrUpdate"></characterform>
	</div>
</template>
  

<script>
import characterForm from '../../components/characterForm.vue';
export default {
  name: 'Create',
  components: {
    'characterform': characterForm
  },
  methods: {
    createOrUpdate: async function(character) {
		fetch('/api/create', {method: 'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify(character)})
    }
  }
};
</script>