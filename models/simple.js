const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let employee = new Schema(
  {
    name: {
      type: String
    },
    age: {
      type: Number
    },
    location: {
      type: String
    }
  },
  { collection: "Employees" }
);

module.exports = mongoose.model("employees", employee);