const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let characterSchema = new Schema(
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
    },
    basestats: {
      strength: {
        type: Number
      },
      perception: {
        type: Number
      },
      endurance: {
        type: Number
      },
      charisma: {
        type: Number
      },
      intelligence: {
        type: Number
      },
      agility: {
        type: Number
      },
      luck: {
        type: Number
      }
    }
  },
  { collection: "Characters" }
);

module.exports = mongoose.model("character", characterSchema);