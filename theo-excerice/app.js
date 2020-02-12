var express=require('express')
var bodyParser= require('body-parser')
var {computers }= require('./routes/computers');
var {books} = require('./routes/books');
var {users} = require('./routes/users');
var cors = require("cors");
const mongoose = require('mongoose');


var app =express()

const port = 4000;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect('mongodb+srv://Maggie-Moteno:Maggie-Thabo2000@maggie1-qiqvh.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});


computers(app);
books(app);
users(app);

app.use(express.static ('./thunk-example/public'))

app.listen(port,function(){
    console.log(`i'm listening to port ${port}`)
})

module.exports = app;