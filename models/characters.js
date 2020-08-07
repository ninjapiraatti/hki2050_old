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
    bio: {
      type: String
    },
    image: {
      type: String
    },
    dem: {
      type: Number
    },
    id: {
      type: String
    }
  },
  { collection: "Characters" }
);

module.exports = mongoose.model("characters", character);