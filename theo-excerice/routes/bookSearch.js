const BooksSchema = require("../models/bookModel");

const bookSearch = function(app) {
  app.get("/bookSearch", async (req, res) => {
    // console.log("query string",results)
    try {
        // console.log(req.query)
        const regexForTitle = new RegExp(escape(req.query.searchTermForTitle),'gi');
        const regexForAuthor = new RegExp(escape(req.query.searchTermForAuthor),'gi');
        const results = await BooksSchema.find({name :regexForTitle , author : regexForAuthor});
        console.log(results)
      return res.status(201).json(results);
    } catch (e) {
        console.log(e);
      return res.status(500);
    }
  });
};

module.exports = { bookSearch };
