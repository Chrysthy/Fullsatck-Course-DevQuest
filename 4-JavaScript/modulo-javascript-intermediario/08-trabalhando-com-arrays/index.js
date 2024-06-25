let frutas = ['banana', 'maça', 'laranja', 'pêra']
let frutasTamanho = frutas.length

// console.log(frutasTamanho)
// console.log(frutas[0]);

// for (let i =
//     0; i < frutasTamanho; i++) {
//     console.log('Frutas: ' + frutas[i]);
// }

//forEach
//primeiro tem que escreve a variável

frutas.forEach(function (item, indice, array) {
    console.log(item);
    console.log(array);
    console.log('Frutas: ' + frutas[indice])
})

//podemos usar somente o console.log('Fruta: ' + item)


