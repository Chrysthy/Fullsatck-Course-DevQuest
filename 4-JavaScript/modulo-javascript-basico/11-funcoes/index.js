//Anatomia da Função
/*
    function nomeDaFuncao(){
        <bloco de execução>
    }   

    nomeDaFuncao()
*/

/*
    function nomeDaFuncao(parametro1, parametro2){
        <bloco de execução>
    }   

    nomeDaFuncao(parametro1, parametro2)
*/

function incentivarQuester(nomeQuester = "Quester") {
    alert("Muito bem " + nomeQuester + "! você chegou ao JS, continue assim!")
}

incentivarQuester()


function soma(numero1, numero2) {
    return numero1 + numero2
}

let resultadoDaSoma = soma(5, 7)
console.log(resultadoDaSoma)

resultadoDaSoma = soma(resultadoDaSoma, 10)
console.log(resultadoDaSoma)