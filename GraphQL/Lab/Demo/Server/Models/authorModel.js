const mongoose = require("mongoose");

let AuthorSchema = new mongoose.Schema({
  name: String,
  age: Number,
  books: [],
});

module.exports = mongoose.model("author", AuthorSchema);
