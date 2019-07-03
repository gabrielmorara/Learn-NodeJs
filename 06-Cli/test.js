const assert = require("assert");
const nock = require("../node_modules/nock");
const databse = require("./database");
const DEFAULT_ITEM_CADASTAR = {
	nome: "Flash",
	podes: "Speed",
	id: 1
};

describe("Suite de manipulacao de herois", () => {
	it("deve cadastrar um heroi usando arquivo", async () => {
		const expected = DEFAULT_ITEM_CADASTAR;
		const resultado = await databse.cadastrar(DEFAULT_ITEM_CADASTAR);
		const [actual] = await databse.listar(DEFAULT_ITEM_CADASTAR.id);
		assert.deepEqual(actual, expected);
	});
	it("deve pesquisar um heroi usando arquivos", async () => {
		const expected = DEFAULT_ITEM_CADASTAR;
		const [resultado] = await databse.listar(expected.id);
		assert.deepEqual(resultado, expected);
	});
	it("deve atualizar um heroi usando arquivo", async () => {
		const expected = {
			id: 1,
			nome: "BATMAN",
			podes: "Dinheiro"
		};
		console.log('expected', expected)
		const [resultado] = await databse.atualizar(DEFAULT_ITEM_CADASTAR.id, expected);
		assert.deepEqual(resultado, expected);
	});
	it("deve remover um heroi por id usando arquivo", async () => {
		const expected = true;
		const resultado = await databse.remover(DEFAULT_ITEM_CADASTAR.id);
		assert.deepEqual(resultado, expected);
	});
});
