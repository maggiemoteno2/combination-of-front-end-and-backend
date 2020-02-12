const UsersModel=require('../models/usersModel')

const users =(app)=>{
app.get('/users',function(req,res){
   res.send(people)
})


app.post('/usersAdded',function(req,res){
    console.log("users",req.body.name)
const userSchema= new UsersModel({
    name: req.body.name,
})
userSchema.save().then(res=>console.log(res)).catch(e => console.log(e))
    res.send(201);
})
}



module.exports= {users}