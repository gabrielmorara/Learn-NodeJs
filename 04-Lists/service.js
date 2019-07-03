const axios = require("../node_modules/axios");
const URL = `https://swapi.co/api/people`;

async function obterPessoas(nome) {
	const url = `${URL}/?search=${nome}&format=json`;
	const response = await axios.get(url);
	console.log(response.data);
	return response.data.results.map(mapaearPessoa);
}

function mapaearPessoa(item) {
	return {
		nome: item.name,
		peso: item.height
	};
}

obterPessoas('R2-D2')

module.exports= {
	obterPessoas
};
