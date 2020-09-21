const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let itemSchema = new Schema(
  {
    name: {
      type: String
    },
    condition: {
      type: Number
    },
    description: {
      type: String
    },
    image: {
      type: String
    },
    amount: {
      type: String
    },
    damage: {
      type: String
    },
    basestatmods: {
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
    },
    skillmodifiers: {
      bruteforce: {
        type: Number
      },
      wrestle: {
        type: Number
      },
      melee: {
        type: Number
      },
      drunkenfight: {
        type: Number
      },
      firearms: {
        type: Number
      },
      investigation: {
        type: Number
      },
      outdoorsmanship: {
        type: Number
      },
      medical: {
        type: Number
      },
      lockpicking: {
        type: Number
      },
      mechanics: {
        type: Number
      },
      health: {
        type: Number
      },
      stealth: {
        type: Number
      },
      sustainedstrength: {
        type: Number
      },
      sex: {
        type: Number
      },
      persuasion: {
        type: Number
      },
      bartering: {
        type: Number
      },
      streetsmarts: {
        type: Number
      },
      distraction: {
        type: Number
      },
      performance: {
        type: Number
      },
      hacking: {
        type: Number
      },
      stealing: {
        type: Number
      },
      initiative: {
        type: Number
      },
      criticalhits: {
        type: Number
      },
      gambling: {
        type: Number
      }
    }
  },
  { collection: "Items" }
);

module.exports = mongoose.model("item", itemSchema);