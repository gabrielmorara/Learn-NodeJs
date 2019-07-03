const express = require("express");
const mongoose = require("mongoose");

const app = express();
mongoose.connect("mongodb://localhost:27017/nodeapi", {
	useNewUrlParser: true
});

require("./src/models/Product");

app.use("/api", require("./src/routes"));

app.listen(8080, function() {
	console.log("Servidor Rodando");
});
