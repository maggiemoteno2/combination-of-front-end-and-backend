const BooksSchema = require("../models/bookModel");

const books = function(app) {
  app.get("/books", function(req, res) {
    BooksSchema.find()
      .then(data => res.send(data))
      .catch(e => console.log(e));
  });
  app.post("/booksAdded", function(req, res) {
    console.log("res", res);
    const bookSchema = new BooksSchema({
      name: req.body.name,
      author: req.body.author
    });
    bookSchema
      .save()
      .then(books => res.send(books))
      .catch(e => console.log(e));
  });

  app.put("/books/:id", function(req, res, next) {
    console.log("params", req.body);
    BooksSchema.findByIdAndUpdate({ _id: req.params.id }, req.body).then(
      function() {
        BooksSchema.findOne({ _id: req.params.id }).then(function(data) {
          res.send(data);
        });
      }
    );
  });
  app.delete("/books/delete/:id", function(req, res) {
    console.log("delete", req.params.id);
    BooksSchema.findByIdAndDelete({ _id: req.params.id }).then(function() {
      BooksSchema.findOneAndDelete({ _id: req.params.id }).then(function(data) {
        res.send(data);
      });
    });
  });
};

module.exports = { books };
