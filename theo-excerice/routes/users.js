const UsersModel = require("../models/usersModel");

const users = app => {
  app.get("/users", function(req, res) {
    UsersModel.find().then(data=>res.send(data)).catch(e=>console.log(e))
  });



  app.post("/usersAdded", function(req, res) {
    console.log("users",req.body.name.name);
    const userSchema = new UsersModel({
      name: req.body.name.name
    });


    userSchema
      .save()
      .then(users => res.send(users))
      .catch(e => console.log(e));
  });


  app.delete('/users/delete/:id',function(req,res){
      console.log("my id", req.params.id)
      UsersModel.findByIdAndDelete({_id:req.params.id}).then(function(){
          UsersModel.findOneAndDelete({_id:req.params.id}).then(function(data){
              res.send(data)
          })
      })
  })
};

module.exports = { users };
