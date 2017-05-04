var express = require("express");
var path = require("path");

var app = express();

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "food-des.html"));
});

app.get("/food-game", function(req, res) {
	res.sendFile(path.join(__dirname, "food-game.html"));
});

app.get("/food-resour", function(req, res) {
	res.sendFile(path.join(__dirname, "food-resour.html"));
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
	console.log("The server has started");
});