const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name:String,
  specialization:String,
  availableSlots:[String]
});

module.exports = mongoose.model("User", userSchema);