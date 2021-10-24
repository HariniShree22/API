require("dotenv").config();
const express=require("express");
const app=express();
var nodemailer = require('nodemailer');

const userRouter=require("./api/users/user.router");

app.use(express.json());
app.use("/app/users",userRouter);

app.listen(process.env.APP_PORT,()=>{
    console.log("Server up and running in ",process.env.APP_PORT);
});