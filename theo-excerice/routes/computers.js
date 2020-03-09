const ComputerModel = require("../models/computerModel");

const computers = function(app) {
  app.get("/computers", async(req, res) => {
    try{
      const results = await ComputerModel.find()
      const computers = results.map(computer => {
        return {id : computer._id , name : computer.name, date : computer.date};
      });
      console.log("computer results",computers)
      res.status(201).json(computers)
    }catch(e){
      res.status(500)
    }
  });

  app.post("/computer", async(req, res) => {
  try{
    const computerModel = new ComputerModel({
      name: req.body.name
    });
    const computer = await computerModel.save()
    const computerWithProperId = {id : computer._id , name : computer.name, date : computer.date }
    res.status(201).json(computerWithProperId)

  }catch(e){
    res.status(500)
  }

  });

  app.delete("/computers/:id", async(req, res) =>{
    try{
     await ComputerModel.findByIdAndDelete({ _id: req.params.id }, req.body)
      res.send(200)
    }catch(e){
      res.status(500)
    }
  });
};

module.exports = { computers };
