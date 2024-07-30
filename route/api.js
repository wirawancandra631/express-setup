const express=require("express");


const apiRoute=express.Router();


apiRoute.get("/",(req,res)=>{
    res.json({
        message:"success"
    })
})

module.exports=apiRoute;