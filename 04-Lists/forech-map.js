const service = require("./service");

async function main() {
	try {
		const result = await service.obterPessoas('c');

		// For Each
		const names = []
		result.results.forEach(function (pessoa){
			names.push(pessoa.name)
		})

		// Map	
		const namesMap = result.results.map(function(pessoa){
			return pessoa.name
		})

		// Arrow funciton Map 
		const namesMapReduzido = result.results.map((pessoa) => pessoa.name)

		console.log('names,', names)
		console.log('names,', namesMap)
		console.log('names,', namesMapReduzido)
		
	} catch (error) {
		console.error('Deu ruim', error);
	}
}

main();
