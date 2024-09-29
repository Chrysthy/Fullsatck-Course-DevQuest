//Usando export default
//pode usar tanto na função quanto depois dela

/*

    export default function somar(numero1, numero2) {
    return numero1 + numero2
    }

*/

function somar(numero1, numero2) {
    return numero1 + numero2
}

export default somar


//Usando exportação nomeada
//se for mais de uma função
//se for somente uma, irá passar o export na frente do function
function somar(numero1, numero2) {
    return numero1 + numero2
}

export { somar }