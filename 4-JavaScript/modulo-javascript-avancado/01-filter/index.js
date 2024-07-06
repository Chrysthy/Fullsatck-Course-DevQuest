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
//abreviada.1

// let pessoasComIdadeDe4Anos = pessoas.filter((pessoa) => {
//     return pessoa.idade === 4
// })

// console.log(pessoasComIdadeDe4Anos);


//------------------------------------------------------------------
//abreviada.2

let pessoasComIdadeDe4Anos = pessoas.filter((pessoa) => pessoa.idade === 4)

//----------------------------------------------------------------
// let pessoasComIdadeDe4Anos = []

// for (let i = 0; i < pessoas.length; i++) {

//     if (pessoas[i].idade === 4) {
//         pessoasComIdadeDe4Anos.push(pessoas[i])
//     }
// }

// console.log(pessoasComIdadeDe4Anos);