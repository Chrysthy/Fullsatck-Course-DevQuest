//operadores lógicos servem para validar dados ou verificar condiçoes

// == igual - comparação: a==b verdadeiro se for igual a b

// === idêntico, compara o conteúdo e o tipo, se é o mesmo: a===b

// != diferente: verdadeiro se for diferente de b

// !== verdadeiro se o a não for idêntico, compara o conteúdo e o tipo: a !== b

// < menor: a < b

// > maior: a > b

// menor ou igual: <=

// maior ou igual: >=


// const a = 3
// const b = "3"

// console.log(a !== b)


// && = e



const a = 2
const b = 2

console.log(a === b && a <= b)
//V e V = V

console.log(a === b && a < b)
//V e F = F

console.log(a > b && a === b)
//F e V = F

console.log(a > b && a < b)
//F e F = F


// || = ou
//se algum item for verdadeiro, o resultado final será verdadeiro

console.log(a === b || a <= b)
//V ou V = V

console.log(a === b || a < b)
//V ou F = F

console.log(a > b || a === b)
//F ou V = V

console.log(a > b || a < b)
//F ou F = F



// ! = negação

console.log(!(a === b))
//false

console.log(!(a < b))
//true