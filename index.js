var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send(" Welcome Node js ");
});

app.listen(3000, function () {
    console.log("Node server is runing on port 8000...");
});