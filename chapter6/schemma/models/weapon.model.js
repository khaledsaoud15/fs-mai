const mongoose = require("mongoose");

const weaponSchemma = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    damage: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("weapons", weaponSchemma);
