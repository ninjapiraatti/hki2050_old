<template>
	<div>
		<a href="#" v-on:click.prevent="consoleLog()" class="link">Call function</a>
		<a href="#" v-on:click.prevent="insertData()" class="link">Insert data</a>
	</div>
</template>
  

<script>
//const todoModel = require('../../models/todoschema.js');
export default {
	name: "insert",
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
			fetch('/api/insert').then(data => data.json())
			.then(da => console.log(da))
		}
	}
}
</script>