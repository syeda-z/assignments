const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const app = express();
const User = require("./models/data.model");

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//serving file
app.use(express.static(__dirname));

app.get('/pricing',(req,res)=>{ //app.get('/album/pricing',(req,res)=>{
    res.sendFile(path.join(__dirname,'/static/pricing.html'));
});

app.get('/form',(req,res)=>{ //app.get('/album/pricing/form',(req,res)=>{
    res.sendFile(path.join(__dirname,'/static/checkout_form.html'));
});

app.get('/album',(req,res)=>{ //app.get('/album',(req,res)=>{
    res.sendFile(path.join(__dirname,'/static/album.html'));
});

//Saving the Details
app.post('/submit-form', async (req, res) => {
    try {
        const userData = new User(req.body);
        await userData.save();
        res.send('Form submitted and saved!');
    } catch (err) {
        res.status(500).send('Failed to save data.');
    }
});

//displaying the details
app.get('/FormDetails', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users); // or you can render an HTML page using templating
    } catch (err) {
        res.status(500).send('Failed to retrieve data.');
    }
});


//connecting the program to mongodb
mongoose
  .connect(
    "mongodb+srv://zainab17703:Nq4InbLBK3MVhEFF@assignment.kufgics.mongodb.net/?retryWrites=true&w=majority&appName=assignment"
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