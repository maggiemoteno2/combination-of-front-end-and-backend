const BooksSchema = require("../models/bookModel");

const books = function(app) {

  app.get("/books", function(req, res) {
    res.send(availableBooks);
  });
  app.post("/booksAdded", function(req, res) {
    console.log("res", res);
    const bookSchema = new BooksSchema({
      name: req.body.name,
      author: req.body.author
    });
    bookSchema
      .save()
      .then(res => res)
      .catch(e => console.log(e));
    res.send(201);
  });
};

module.exports = { books };
