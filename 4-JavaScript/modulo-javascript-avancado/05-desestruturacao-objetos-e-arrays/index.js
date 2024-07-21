// Destruturação de objetos

let pessoa = { nome: 'Chrystine', sobrenome: 'Vasconcelos', idade: 32 }
// let nome = pessoa.nome
// let idade = pessoa.idade

// console.log(nome);
// console.log(idade);

let { nome: nome, idade: idade, sobrenome: sobrenomeDaPessoa, sexo = 'feminino' } = pessoa

console.log(nome);
console.log(idade);
console.log(sobrenomeDaPessoa);
console.log(sexo);


//Destruturação de arrays

const numeros = [1, 2, 3];

const [um, dois, tres, quatro = 4] = numeros;

console.log(um);
console.log(dois);
console.log(tres);
console.log(quatro);


//Se a propriedade ou índice não existir, você pode definir valores padrão colocando o sinal de igual