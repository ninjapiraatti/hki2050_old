const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    username: {
      type: String
	},
	email: {
		type: String
	},
	password: {
		type: String
	},
	id: {
		type: Number
	}
  },
  { collection: "Users" }
);

module.exports = mongoose.model("user", userSchema);