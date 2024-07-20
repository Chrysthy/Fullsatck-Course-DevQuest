let ordens = [

    { cliente: 'Noob', tipo: 'compra', quantidade: 56, ativo: 'NFLX34' },
    { cliente: 'Leon', tipo: 'compra', quantidade: 56, ativo: 'NFLX34' },
    { cliente: 'Collin', tipo: 'compra', quantidade: 56, ativo: 'NFLX34' }
]

let quantidadeDeOrdens = 0

for (let i = 0; i < ordens.length; i++){
    quantidadeDeOrdens += ordens[i]. quantidade
}

console.log(quantidadeDeOrdens);