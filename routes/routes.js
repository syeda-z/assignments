const express = require('express');
const path = require('path');
const router = express.Router();
const {saveUser,getAllUsers} = require("../controller/user.controller");

//to get html file
router.get("/UserDetails",(req,res)=>{
    res.sendFile(path.join(__dirname,"../static/display.html"));
});

//routes
router.post("/submit-form",saveUser)
router.get("/api/users",getAllUsers)

// app.use(express.static(path.join(__dirname,'static')));

// //serves each HTML file separately.
// router.get('/pricing',(req,res)=>{ //app.get('/album/pricing',(req,res)=>{
//     res.sendFile(path.join(__dirname,'/static/pricing.html'));
// });

// router.get('/form',(req,res)=>{ //app.get('/album/pricing/form',(req,res)=>{
//     res.sendFile(path.join(__dirname,'/static/checkout_form.html'));
// });

// router.get('/album',(req,res)=>{ //app.get('/album',(req,res)=>{
//     res.sendFile(path.join(__dirname,'/static/album.html'));
// });

// router.get('/data',(req,res)=>{ 
//     res.sendFile(path.join(__dirname,'display.html'));
// });

// // app.listen(3000,()=>{
// //     console.log('server is up and running at port 3000');
// // });

module.exports = router;
