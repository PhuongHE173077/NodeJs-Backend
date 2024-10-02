var express = require("express");
require('dotenv').config()
const configViewEngine = require("./config/viewEngine.js")
const webRouter = require('./routes/web.js')
const mysql = require("mysql2")

var app = express();
let port = 3000;
hostname = 'localhost'

configViewEngine(app)

app.use('/', webRouter)

//create connection 
const connection = await mysql.createConnection({
    host: 'localhost',
    port: 3307,//default 3306
    user: 'root',
    password: '123456',
    database: 'datatest',
});


app.listen(port, hostname, function () {
    console.log("Node server is runing on port 3000...");
});