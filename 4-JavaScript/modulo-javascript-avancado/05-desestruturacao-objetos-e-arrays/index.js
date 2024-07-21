let pessoa = { nome: 'Chrystine', sobrenome: 'Vasconcelos', idade: 32 }
// let nome = pessoa.nome
// let idade = pessoa.idade

// console.log(nome);
// console.log(idade);

let { nome: nome, idade: idade, sobrenome: sobrenomeDaPessoa } = pessoa

console.log(nome);
console.log(idade);
console.log(sobrenomeDaPessoa);


