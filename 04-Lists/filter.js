const {obterPessoas} = require("./service")

async function main(){
    try {
        const {results} = await obterPessoas('a')
        const familiaLars =  results.filter(function (item){
            const result = item.name.toLowerCase().indexOf('lars') !== -1
            return result
        })
        const names = familiaLars.map((pessoa) => pessoa.name)
        console.log(names)
    } catch (erro) {
        console.log('erro :', erro);
    }
}

main()