const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let characterSchema = new Schema(
  {
    name: {
      type: String
    },
    id: {
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
    owner: {
      type: String
    },
    inventory: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'item'
    }],
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
  { collection: "Characters" }
);

module.exports = mongoose.model("character", characterSchema);