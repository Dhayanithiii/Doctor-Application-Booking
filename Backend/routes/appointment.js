const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");


router.post("/book", async (req,res)=>{

   const appointment = new Appointment(req.body);
   await appointment.save();

   res.json({message:"Appointment booked"});
});


router.get("/:userId", async (req,res)=>{

   const data = await Appointment.find({
      userId:req.params.userId
   });

   res.json(data);
});

module.exports = router;