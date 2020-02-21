const mongoose = require("mongoose");

var UsersSchema = mongoose.Schema({
  name: {type: String, required:true},
  date: { type: Date, default: Date.now },
  
});

module.exports = mongoose.model("usersModel", UsersSchema);
