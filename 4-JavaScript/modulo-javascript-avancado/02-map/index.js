let pessoas = [
    { nome: 'Noob', idade: 14 },
    { nome: 'Leon', idade: 4 },
    { nome: 'Collin', idade: 4 }
]


// let nomeDasPessoas = pessoas.map((pessoa) => `${pessoa.nome} têm ${pessoa.idade} anos de idade.`)

// console.log(nomeDasPessoas);


let nomeDasPessoas = pessoas.map(pessoa => pessoa.nome + 'têm' + pessoa.idade + 'anos de idade.')

console.log(nomeDasPessoas);
