const mongoose = require("mongoose");

const Product = mongoose.model("Product", {
  name: {
    type: String,
    required: true,
    trim: true,
  },

  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
    validate(value) {
      if (value < 0) {
        throw new Error("Price must be a postive number");
      }
    },
  },
  quantity: {
    type: Number,
    required: true,
    trim: true,
    validate(value) {
      if (value < 0) {
        throw new Error("Quantity must be a postive number");
      }
    },
  },
});

module.exports = Product;
