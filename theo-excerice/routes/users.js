const UsersModel = require("../models/usersModel");

const users = app => {
  app.get("/users", async(req, res) => {
    try{
     const results = await UsersModel.find()
     const users = results.map(user => {
      return {id : user._id , name : user.name, date : user.date};
    });
      res.status(201).json(users)
    }catch(e){
      res.status(500)
    }
  });

  app.post("/users", async(req, res) => {
    const userValidator= await UserModel.find()
    for(var i in userValidator){
      if(req.body.name.toUpperCase().trim()=== userValidator[i].name.toUpperCase().trim())
      {
        return res.status(400).send("computer already exist")
      }
    }
    console.log("book validator",userValidator)
    if (req.body.name === "12345678910") {
      return res.status(400).send("please add proper name");
    }
    if (req.body.name === "") {
      return res.status(400).send("name is required");
    }
    try{
      const userSchema = new UsersModel({
        name: req.body.name
      });
  const user = await userSchema.save()
  const userWithProperId = {id : user._id , name : user.name, date : user.date }
  res.status(201).json(userWithProperId)
    }catch(e){
      res.status(500)
    }
  });

  app.delete("/users/delete/:id", async(req, res) =>{
    try{
       await UsersModel.findByIdAndDelete({ _id: req.params.id })
       res.status(201)
    }catch(e){
      res.status(500)
    }
   
  });
};

module.exports = { users };
