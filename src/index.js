var express = require("express");
require('dotenv').config()
const path = require('path')

var app = express();
let port = 3000;
hostname = 'localhost'

app.set('views', './src/views')
app.use(express.static(path.join(__dirname, 'public')))

console.log('check env', process.env.PORT || 3000)
app.get("/", function (req, res) {
    res.render('sample.ejs')
});


app.listen(port, hostname, function () {
    console.log("Node server is runing on port 3000...");
});