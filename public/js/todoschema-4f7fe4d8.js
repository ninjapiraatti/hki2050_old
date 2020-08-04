const mongoose = import('./index-84f799cc.js');

const Schema = mongoose.Schema;

let todoSchema = new Schema(
	{
		title: {
			type: String,
			required: true
		}, 
			completed: {
			type: Boolean,
			required: true
		}
	},
	{ collection: 'todos' }
);

module.exports = mongoose.model("todo", todoSchema);
