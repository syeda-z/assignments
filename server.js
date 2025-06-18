const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const app = express();
const User = require("./models/data.model");
const router = require("./routes/routes");

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//serving file
app.use(express.static(path.join(__dirname,"static")));
//routes
app.use('/',router)

//connecting the program to mongodb
mongoose
  .connect(
    "mongodb+srv://zainab17703:<password>@assignment.kufgics.mongodb.net/?retryWrites=true&w=majority&appName=assignment"
  )
  .then(() => {
    console.log("connected to DB"); //executes when connected
    app.listen(3000, () => {
      console.log("server is on port 3000"); //executes after the above line
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
//gives above o/p once its connected or not

