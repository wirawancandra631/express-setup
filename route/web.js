const express=require("express");


const webRoute=express.Router();


webRoute.get("/",(req,res)=>{
    res.render("welcome")
})

module.exports=webRoute;