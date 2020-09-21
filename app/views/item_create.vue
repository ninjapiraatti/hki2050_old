<template>
	<div class="section section--invert section--login">
    <h2>New item</h2>
    <itemform @createOrUpdate="createOrUpdate"></itemform>
	</div>
</template>
  

<script>
import itemForm from '../../components/itemForm.vue';
export default {
  name: 'Create',
  components: {
    'itemform': itemForm
  },
  methods: {
    createOrUpdate: async function(item) {
		fetch('/api/create_item', {method: 'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify(item)})
    }
  }
};
</script>