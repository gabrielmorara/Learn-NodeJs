const service = require("./service");

async function main() {
	try {
		const result = await service.obterPessoas("a");
		const names = [];
		// For normal
		console.time("for");
		for (let i = 0; i <= result.results.length - 1; i++) {
			const pessoa = result.results[i];
			names.push(pessoa.name);
		}
        console.timeEnd("for");
        
		// For in
		console.time("forin");
		for (let j in result.results) {
			const pessoa = result.results[j];
			names.push(pessoa.name);
		}
        console.timeEnd("forin");
        
        // For of
		console.time("forof");
        for(pessoaOf of result.results){
            names.push(pessoaOf.name)
        }
        console.timeEnd("forof");

        console.log(`names`, names);
	} catch (error) {
		console.log("error :", error);
	}
}

main()
