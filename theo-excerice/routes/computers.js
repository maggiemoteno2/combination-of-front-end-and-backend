const ComputerModel =require('../models/computerModel')



const computers = function(app){
      app.get("/computers",function(req,res){
        res.send(computers)
      })

    app.post("/computer",function(req,res){
      console.log('name',req.body.name)
      const computerModel = new ComputerModel({
          name:req.body.name
      })
  
      computerModel.save().then(res => res).catch(e => console.log(e))
      res.send(201)
    }) 
}


module.exports = {computers};

