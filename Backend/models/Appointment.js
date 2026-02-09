const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  userId:String,
  doctorId:String,
  date:String,
  time:String,
  status:{type:String, default:"Booked"}
});

module.exports = mongoose.model("Appointment", appointmentSchema);