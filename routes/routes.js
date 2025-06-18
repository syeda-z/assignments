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
router.post("/submit-form",saveUser);
router.get("/api/users",getAllUsers);
router.get("/:id",getOneUsers);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);

module.exports = router;
