const { Sequelize } = require("sequelize")
require("dotenv").config()
const DefaultSetup = {
    DBENGINE: "mysql",
    DBNAME: "example",
    DBHOST: "localhost",
    DBUSERNAME: "root",
    DBPASSWORD: "root"
}


const sequelize = new Sequelize(process.env.DBNAME || DefaultSetup.DBNAME, process.env.DBUSERNAME || DefaultSetup.DBUSERNAME, process.env.DBPASSWORD || DefaultSetup.DBPASSWORD, {
    dialect: process.env.DBENGINE || DefaultSetup.DBENGINE,
    host: process.env.DBHOST || DefaultSetup.DBHOST
})

module.exports=sequelize;