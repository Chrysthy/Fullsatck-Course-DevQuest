let ordens = [

    { cliente: 'Noob', tipo: 'compra', quantidade: 56, ativo: 'NFLX34' },
    { cliente: 'Leon', tipo: 'compra', quantidade: 76, ativo: 'NFLX34' },
    { cliente: 'Collin', tipo: 'compra', quantidade: 21, ativo: 'NFLX34' }
]

// let quantidadeDeOrdens = 0

// for (let i = 0; i < ordens.length; i++){
//     quantidadeDeOrdens += ordens[i]. quantidade
// }

let quantidadeDeOrdens = ordens.reduce(function (somaOrdens, ordem) {
    return somaOrdens + ordem.quantidade
}, 0)


// let quantidadeDeOrdens = ordens.reduce((somaOrdens, ordem) => somaOrdens + ordem.quantidade, 0)

console.log(quantidadeDeOrdens);