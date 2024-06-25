var pais // declaração (declarando)
pais = "Brasil" // atribuição (atribuindo)
    
var pais = "Brasil" // declarando e atrubuindo

//O hoisting (içamento) só move a declaração da variável e não move a atribuição

console.log(pais)
var pais = "Brasil"

//irá dar undefined porque tentou imprimir a variável antes de atribuir - isso usando o var


console.log(pais)
let pais = "Brasil"

//irá dar o uncaught reference error porque as variáveis com let não podem ser lidas ou escritas ate que tenham sidas totalmente inicializadas.
// E elas serão totalmente inicializadas onde são declaradas no código


let pais = "Brasil"
console.log(pais)

//Ela estará totalmente inicializada dessa forma ou

let pais 
pais = "Brasil"

console.log(pais)