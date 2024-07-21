// Destruturação de objetos

let pessoa = { nome: 'Chrystine', sobrenome: 'Vasconcelos', idade: 32 }
// let nome = pessoa.nome
// let idade = pessoa.idade

// console.log(nome);
// console.log(idade);

let { nome: nome, idade: idade, sobrenome: sobrenomeDaPessoa } = pessoa

console.log(nome);
console.log(idade);
console.log(sobrenomeDaPessoa);


//Destruturação de arrays

const numeros = [1, 2, 3];

const [um, dois, tres, quatro] = numeros;

console.log(um);
console.log(dois);
console.log(tres);