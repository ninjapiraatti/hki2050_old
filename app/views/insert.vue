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
			let newTodo = new todoModel();
			newTodo.title = req.body.todo;
			newTodo.completed = false;
			newTodo.save(err => {
				if (err) {
				console.log(err);
				res.send("Error while adding Todo");
				} else {
				console.log(newTodo);
				res.send("Todo added");
				}
			});
		}
	}
}
</script>