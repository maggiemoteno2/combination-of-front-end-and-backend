const mongoose = require("mongoose");

var ComputerSchema = mongoose.Schema({
  name: String,
  lastActiveAt: Date
});

module.exports = mongoose.model("computerModel", ComputerSchema);
