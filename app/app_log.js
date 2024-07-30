const sequelize = require("../sequelize");


async function app_log(req,res,next){
    try{
         await sequelize.authenticate();
         console.log("Database is connected");
         next()  
    }
    catch(m){
       console.log(m);
       next(m)
    }
}

module.exports=app_log