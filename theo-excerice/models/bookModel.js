const mongoose = require("mongoose");

var BooksSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  author: { type: String, require: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("bookModel", BooksSchema);
