const funcao = require("./callback");

console.log("Inicio");

funcao.sincrona(function(string, numero) {
	console.log(string);
	console.log(numero);
});

console.log("Fim");
