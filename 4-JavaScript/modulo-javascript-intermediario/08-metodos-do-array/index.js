let frutas = ['banana', 'maça', 'laranja', 'pêra']

// //push adiciona elemento no final, passar parâmetro
// frutas.push('manga')
// console.log(frutas);

// //pop remove o elemento do final, não preicisa passar parâmetro
// frutas.pop()
// console.log(frutas);

// //shift remove o elemento do início, não preicisa passar parâmetro
// frutas.shift()
// console.log(frutas);

// //unshift adiciona elemento no início, passar parâmetro
// frutas.unshift('morango')
// console.log(frutas);

// //indexOf procura o índice de uma array
// let posicaoLaranja = frutas.indexOf('laranja')
// console.log(posicaoLaranja);

//slice remove um item mas não afeta o array original, ele cria outro
let frutasExtraidas = frutas.slice(1, 3)
// let frutasExtraidas = frutas.slice(1)
console.log(frutasExtraidas);
console.log(frutas);

//splice remendar ou costurar. Conseguimos remover um item pela posição
//do índice desse intem e gera uma array nova
// let frutasExtraidas = frutas.splice(1, 2)
// console.log(frutasExtraidas);

// let removeEAdiciona = frutas.splice(1, 2, 'Uva', 'Abacaxi', 'Caju')
// console.log(frutas);
// console.log(removeEAdiciona);