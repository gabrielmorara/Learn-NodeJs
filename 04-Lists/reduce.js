const { obterPessoas } = require("./service");

async function main() {
	try {
		const { results } = await obterPessoas("a");
		const pesos = results.map(pessoa => parseInt(pessoa.height));
		console.log(pesos);

		const total = pesos.reduce((anterior, passado) => {
			return anterior + passado;
		});
		console.log(total);
	} catch (error) {
		console.log("error :", error);
	}
}

main();
