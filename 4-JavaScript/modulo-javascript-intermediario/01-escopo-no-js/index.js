// //Escopo de bloco

// if (true) {
//     const mensagem = "Olá"
//     console.log(mensagem);
// }

// console.log(mensagem);


// //escopo autônomo

// {
//     var mensagem = "Olá"
//     console.log(mensagem);
// }

// console.log(mensagem);



// //Escopo de função

// function falar() {
//     var mensagem = "Olá Mundo!"
//     console.log(mensagem);
   
// }

// falar()
// console.log(mensagem);


let numero = 123

function falar() {
    var mensagem = "Olá Mundo!"
    console.log(mensagem);

    function falarOutraMensagem() {
        
    }

    falarOutraMensagem()
    console.log(falarOutraMensagem);
    
}

falar()
console.log(numero);