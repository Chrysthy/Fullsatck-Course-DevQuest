'use strict'

// console.log(this); //ele já existe no escopo golbal
// console.log(window === this); //eles são iguais

// this.name = 'Chrystine'
// function saudar() {
//     console.log('this no contexto da funcao', this)
//     console.log('Olá, ' + this.name);
// }

// saudar()

//Dentro de um método

// let usuario = {
//     nome: 'Chrystine',

//     saudar: function () {
//         console.log('this no contexto do método', this);

//         console.log('this.name no contexto do método', this.nome);
//     }
// }

// usuario.saudar()


let comida = {
    nome: "Brócolis",
    temperatura: 0,

    cozinhar: function (temperaruraDeCozimento) {
        console.log('this no contexto do objeto comida', this);
        this.temperatura = temperaruraDeCozimento;
    }

}

//pode colocar ele fora também
// comida.cozinhar = function (temperaruraDeCozimento) {
//     this.temperatura = temperaruraDeCozimento;
// }

console.log(comida);

comida.cozinhar(100)

console.log(comida);