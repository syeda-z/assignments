const express = require('express');
const path = require('path');
const router = express.Router();
const {saveUser,getAllUsers,updateUser,getOneUsers,deleteUser} = require("../controller/user.controller");

//to get html file
router.get("/UserDetails",(req,res)=>{
    res.sendFile(path.join(__dirname,"../static/display.html"));
});

router.get('/form',(req,res)=>{ //app.get('/album/pricing/form',(req,res)=>{
    res.sendFile(path.join(__dirname,'../static/checkout_form.html'));
});

//routes
router.post("/submit-form",saveUser);//saving user details
router.get("/api/users",getAllUsers);//displaying all users details
router.get("/:id",getOneUsers);//displaying one user details
router.put("/:id",updateUser);//update user details
router.delete("/:id",deleteUser);//delete user

module.exports = router;
