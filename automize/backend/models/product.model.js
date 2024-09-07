const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: Array,
    required: true,
  },
  model: {
    type: String,
  },
  refrence: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("product", productSchema);
