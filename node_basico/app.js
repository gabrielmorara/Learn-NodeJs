const express = require("express");
const app = express();

app.get("/", function(req, res) {
	res.send("Deu bom !!");
});

app.get("/sobre", function(req, res) {
	res.send("sobre o meu pa");
});

app.get("/ola/:nome", function(req, res) {
	res.send(req.params);
});

app.listen(8080, function() {
	console.log("Servidor Rodancsdsddo");
});
