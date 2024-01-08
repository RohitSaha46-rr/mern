const dotenv=require('dotenv');
const mongoose=require('mongoose');
const express=require('express');
const app=express();
dotenv.config({path:'./config.env'});
require('./db/conn');

const PORT=process.env.PORT;


const middleware=(req,res,next)=>{
next();
}


//const port=80;
app.get('/',(req,res)=>{
res.send("Home Page");
})
app.get('/about',middleware,(req,res)=>{
    res.send("About Page");
})
app.listen(PORT,()=>{
    console.log(`Application created at ${PORT}`);
})