const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'..')));

//serves each HTML file separately.
app.get('/pricing',(req,res)=>{ //app.get('/album/pricing',(req,res)=>{
    res.sendFile(path.join(__dirname,'/static/pricing.html'));
});

app.get('/form',(req,res)=>{ //app.get('/album/pricing/form',(req,res)=>{
    res.sendFile(path.join(__dirname,'/static/checkout_form.html'));
});

app.get('/album',(req,res)=>{ //app.get('/album',(req,res)=>{
    res.sendFile(path.join(__dirname,'/static/album.html'));
});

app.get('/data',(req,res)=>{ 
    res.sendFile(path.join(__dirname,'data.html'));
});

app.listen(3000,()=>{
    console.log('server is up and running at port 3000');
});