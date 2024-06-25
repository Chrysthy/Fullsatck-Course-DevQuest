//Os condicionais são basicamente um funil de escolhas que vão determinar se o código vão terminar por um fluxo ou outro    

//IF

let nomeFilme = "RE"

if (nomeFilme === "Titanic") {
    console.log("É o fime do Titanic")

} else if(nomeFilme === "RE") {
    console.log(`É o fimle do RE`)
    
} else if (nomeFilme === "Silen Hill"){
    console.log("É o filme do Silen Hill")

} else {
    console.log("Não é um dos filmes citados")
}


//else - se não

//else if - se for outra coisa

//podemos usar o operador ternário
//a expressão ternária sempre vai verificar o true primeiro e depois o false

//é pra usar o if e else quando o código for mais complexo e o operador ternário quando for mais simples

// Se o código for mais complexo e tiver várias condições ou ações, é melhor usar if e else para deixar o código mais claro. Se e o código for mais simples e tiver apenas uma condição com duas opções, o operador ternário pode ser uma forma mais concisa de fazer essa escolha.

//false ? console.log("condição verdadeira") : console.log("condição falsa")

nomeFilme === "Titanic" ? console.log("É o filme do Titanic") : console.log("é outro")