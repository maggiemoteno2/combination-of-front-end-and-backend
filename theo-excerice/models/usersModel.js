const mongoose = require("mongoose");

var UsersSchema = mongoose.Schema({
  name: String,
  
});

module.exports = mongoose.model("usersModel", UsersSchema);
