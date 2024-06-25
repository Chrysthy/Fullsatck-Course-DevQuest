// Anatomia:
// switch(parametro){
//  case valor1:
//      <bloco de declaração>
//      break;
//  case valor2:
//      <bloco de declaração>
//      break;
// }

// o parametro é o valor que vai ser testado nos cases e caso encontre um dos cases, ele cai no bloco de declaração e vai executar o código.

// É preciso sempre colocar o break no final de cada case.

// o break é pra sair do switch

let nomeFilme = "Love"

switch (nomeFilme) {
    case "Resident Evil":
        console.log("é o filme Resident Evil")
        break

    case "Silent Hill":
        console.log("é o segundo filme")
        break

    case "Titanic":
        console.log("é o terceiro filme")
        break
    
    default:
        console.log("não é nenhum dos filmes")
        break
    
}


let avaliacao = 4

switch (avaliacao) {
    case 1:
    case 2:
        console.log("Filme ruim")
        break
    
    case 3:
    case 4:
        console.log("Filme bom")
        break
    
    case 5:
        console.log("Filme excelente")
        break
    
    default:
        console.log("não é um valor valido")
        break
}