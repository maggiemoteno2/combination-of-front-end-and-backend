const mongoose = require("mongoose");

var BooksSchema = mongoose.Schema({
  name: {
    type: String,
    require: "name is required"
  },
  author: { type: String, require: "this field is required" },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("bookModel", BooksSchema);
