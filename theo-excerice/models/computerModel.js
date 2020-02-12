const mongoose = require("mongoose");

var ComputerSchema = mongoose.Schema({
  name: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("computerModel", ComputerSchema);
