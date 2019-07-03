function sincrona(callback) {
	console.log("Executando função sincrona");
	callback("Callback Executado", 123);
}

function asincrona(callback) {
	console.log("Executando função asincrona");
	setTimeout(() => {
		callback("Callback Executado", 123);
	}, 5000);
}
module.exports = { sincrona, asincrona };
