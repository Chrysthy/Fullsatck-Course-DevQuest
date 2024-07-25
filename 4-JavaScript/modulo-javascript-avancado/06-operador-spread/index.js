const pessoas = ['Noob', 'Leon', 'Collin']

console.log(...pessoas);


//CONCATENAR DOIS ARRAYS

let pessoas1 = ['Noob', 'Leon', 'Collin']
let pessoas2 = ['Chery', 'Mary', 'James']
let pessoas3 = ['Joker']

// pessoas1 = pessoas1.concat(pessoas2).concat(pessoas3)


//usando o operador spread
// pessoas1 = [...pessoas1, ...pessoas2, ...pessoas3]

// console.log(pessoas1);



//CLONAR OBJETO
let pessoa1 = { nome: 'Chrystine', idade: 32 }
let pessoa2 = { nome: 'Noob', idade: 14 }

const objetoClonado = { ...pessoa1 }

console.log(objetoClonado);
console.log(pessoa1);