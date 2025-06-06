const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'..')));

//serves each HTML file separately.
app.get('/pricing',(req,res)=>{
    res.sendFile(path.join(__dirname,'assignment1.html'));
});

app.get('/form',(req,res)=>{
    res.sendFile(path.join(__dirname,'assignment2.html'));
});

app.get('/album',(req,res)=>{
    res.sendFile(path.join(__dirname,'assignment3.html'));
});

app.listen(3000,()=>{
    console.log('server is up and running at port 3000');
});