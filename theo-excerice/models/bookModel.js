const mongoose = require("mongoose");

var BooksSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  author: { type: String, require: true },
  lastActiveAt: Date
});

module.exports = mongoose.model("bookModel", BooksSchema);
