const BooksSchema = require("../models/bookModel");

const bookSearch = function(app) {
    app.get("/bookSearch", async (req, res) => {
        // console.log("query string",results)
        try{

            const results = await BooksSchema.find({author:req.query.author})
            console.log("query",req.query)
            res.status(201).json(results)
        }catch(e){
            res.status(500)
        }
      
    });
}


module.exports = { bookSearch };