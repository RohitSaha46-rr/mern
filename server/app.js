const mongoose=require('mongoose');
const express=require('express');
const app=express();
const DB=`mongodb+srv://rohit:rohitsaha@cluster0.tlebefc.mongodb.net/mernstack?retryWrites=true&w=majority`;

mongoose.connect(DB).then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log("no connection");
});
const middleware=(req,res,next)=>{
next();
}


const port=80;
app.get('/',(req,res)=>{
res.send("Home Page");
})
app.get('/about',middleware,(req,res)=>{
    res.send("About Page");
})
app.listen(port,()=>{
    console.log("Application created");
})