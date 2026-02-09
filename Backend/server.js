const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/hospitalDB")
.then(()=> console.log("MongoDB connected"))
.catch(err=> console.log(err));


app.get("/", (req,res)=>{
  res.send("API working");
});

const userRoute = require("./routes/user");
const doctorRoute = require("./routes/doctor");
const appointmentRoute = require("./routes/appointment");

app.use("/user", userRoute);
app.use("/doctors", doctorRoute);
app.use("/appointment", appointmentRoute);



app.listen(3000, ()=>{
  console.log("Server running at http://localhost:3000");
});

