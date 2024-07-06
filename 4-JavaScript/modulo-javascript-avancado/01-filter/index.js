//array de objetos

let pessoas = [
    { nome: 'Noob', idade: 14 },
    { nome: 'Leon', idade: 4 },
    { nome: 'Collin', idade: 4 },
]

//completa
// let pessoasComIdadeDe4Anos = pessoas.filter(function (pessoa) {
//     return pessoa.idade === 4
// })

// console.log(pessoasComIdadeDe4Anos);


//------------------------------------------------------------------
//abreviada

let pessoasComIdadeDe4Anos = pessoas.filter((pessoa) => pessoa.idade === 4)

