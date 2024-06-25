// Relembrando: os objetos tem um chave e um valor
// As arrays usamos colchetes

//Pode ser encontrado assim: array dentro de um objeto
let videoGame = {
    nome: 'PlayStation',
    valor: 3.000,
    jogos: ['Silent Hill', 'Tormented Souls', 'Persona 5']
}

console.log(videoGame.jogos[1]);



// jeito 1 de fazer

// let jogo1 = {
//     nome: 'Silent Hill'
// }

// let jogo2 = {
//     nome: 'Tormented Souls'
// }


// let videoGame = {
//     nome: 'PlayStation',
//     valor: 3.000,
//     jogos: [jogo1, jogo2]
// }

// let jogo3 = {
//     nome: 'Persona 5'
// }

// videoGame.jogos.push(jogo3)

// console.log(videoGame);


//jeito 2 de fazer

// let videoGame = {
//     nome: 'PlayStation',
//     valor: 3.000,
//     jogos: [
//         {nome:'Silent Hill'},
//         {nome:'Tormented Souls'}   
//     ]
// }

// let jogo3 = {
//     nome: 'Persona 5'
// }

// videoGame.jogos.push(jogo3)

// console.log(videoGame);



//jeito 3 de fazer - objeto dentro de outro objeto

// let cliente = {
//     nome: 'Chrystine',
//     ultimoPedido: {
//         produto: 'PlayStation',
//         valor: 3000,
//         jogos: [
//             { nome: 'Silent Hill' }
//         ]
//     }

// }

// console.log(cliente.ultimoPedido.jogos[0].nome)