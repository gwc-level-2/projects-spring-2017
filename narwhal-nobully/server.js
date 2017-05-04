var express = require("express");
var path = require("path");

var app = express();

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "bully-homepage.html"));
});

app.get("/bully-about", function(req, res) {
	res.sendFile(path.join(__dirname, "bully-about.html"));
});

app.get("/bully-game", function(req, res) {
	res.sendFile(path.join(__dirname, "bully-game.html"));
});

app.get("/bully-slides", function(req, res) {
	res.sendFile(path.join(__dirname, "bully-slides.html"));
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
	console.log("The server has started");
});