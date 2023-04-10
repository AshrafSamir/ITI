const mongoose = require("mongoose");

let BookSchema = new mongoose.Schema({
  name: String,
  author: String,
  numOfPages: String,
});

module.exports = mongoose.model("book", BookSchema);
