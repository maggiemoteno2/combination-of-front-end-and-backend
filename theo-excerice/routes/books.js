const BooksSchema = require("../models/bookModel");

const books = function(app) {
  app.get("/books/:skip/:limit", async (req, res) => {
    const { skip, limit } = req.params;
    try {
      const results = await BooksSchema.find()
        .skip(Number(skip))
        .limit(Number(limit));
      console.log("results :", results);
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
      console.log("error", e);
      res.status(500);
    }
  });
  app.post("/books", async (req, res) => {
    const bookValidator= await BooksSchema.find()
    for(var i in bookValidator){
      if(req.body.name.toUpperCase().trim()=== bookValidator[i].name.toUpperCase().trim())
      {
        return res.status(400).send("book already exist")
      }
    }
    console.log("book validator",bookValidator)
    if (req.body.name === "" && req.body.author == "") {
      return res.status(400).send("Name and Author required");
    }
    if (req.body.name === "") {
      return res.status(400).send("name is required");
    }
    if (req.body.author == "") {
      return res.status(400).send("author required");
    }

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
    if (req.params.id != req.params.id) {
      return res.status(400).send("incorrect id");
    }
    try {
      await BooksSchema.findByIdAndUpdate({ _id: req.params.id }, req.body);
      console.log("put results", req.body);
      res.send(200);
    } catch (e) {
      console.log(e);
      return res.status(500);
    }
  });
  app.delete("/books/:id", async (req, res) => {
    try {
      await BooksSchema.findByIdAndDelete({ _id: req.params.id });
      res.send(200);
    } catch (e) {
      console.log(e);
      return res.status(500);
    }
  });
};

module.exports = { books };
