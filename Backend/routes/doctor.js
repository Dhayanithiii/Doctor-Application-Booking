const express = require("express");
const router = express.Router();
const Doctor = require("../models/Doctor");


router.get("/", async (req,res)=>{

   const doctors = await Doctor.find();
   res.json(doctors);

});


router.post("/add", async (req,res)=>{

   const doctor = new Doctor(req.body);
   await doctor.save();

   res.json({message:"Doctor added"});
});

module.exports = router;