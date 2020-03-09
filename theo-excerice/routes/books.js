const BooksSchema = require("../models/bookModel");

const books = function(app) {
  app.get("/books/:skip/:limit", async (req, res) => {
    const {skip,limit}=req.params
    try {
      const results = await BooksSchema.find().skip(skip).limit(2);
      console.log('results :', results);
      const books = results.map(book => {
        return {
          id: book._id,
          name: book.name,
          author: book.author,
          date: book.date
        };
      });
      console.log(books);
      res.status(201).json(books);
    } catch (e) {
      res.status(500);
    }
  });
  app.post("/books", async (req, res) => {
    try {
      const bookSchema = new BooksSchema({
        name: req.body.name,
        author: req.body.author
      });
      const book = await bookSchema.save();
      const bookWithProperId = {
        id: book._id,
        name: book.name,
        author: book.author,
        date: book.date
      };
      console.log("my post results", bookWithProperId);
      res.status(201).json(bookWithProperId);
    } catch (e) {
      res.status(500);
    }
  });

  app.put("/books/:id", async (req, res, next) => {
    try {
      await BooksSchema.findByIdAndUpdate({ _id: req.params.id }, req.body);
      console.log("put results", req.body);
      res.send(200);
    } catch (e) {
      console.log(e);
      return res.status(500);
    }
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
