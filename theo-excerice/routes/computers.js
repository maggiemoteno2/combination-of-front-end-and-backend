const ComputerModel =require('../models/computerModel')



const computers = function(app){
      app.get("/computers", function(req,res){
        ComputerModel.find().then(data => res.send(data)).catch(e => console.log(e))
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

