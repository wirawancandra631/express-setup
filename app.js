const path=require("node:path")
const express=require("express");
const cors=require("cors");
const cookierParser=require("cookie-parser");
const apiRoute = require("./route/api");
const webRoute = require("./route/web");
const app_log = require("./app/app_log");
require('dotenv').config()

const app=express();
app.use(cors())
app.use(cookierParser());
app.use(express.static(path.join(__dirname,"public")))
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set("views",path.join(__dirname,process.env.VIEWS||"views"));
app.set("view engine","ejs");
app.use(app_log)
app.use("/api",apiRoute)
app.use("/",webRoute)

const port=process.env.PORT||3000
app.listen(port,()=>{
    console.log(`Server run in port http://localhost:${port}`)
})