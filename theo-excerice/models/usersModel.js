const mongoose = require("mongoose");

var UsersSchema = mongoose.Schema({
  name: String,
  date: { type: Date, default: Date.now },
  
});

module.exports = mongoose.model("usersModel", UsersSchema);
