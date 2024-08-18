//Métodos Assincronos

// setTimeout(() => {

//     alert('Olá!')

// }, 3000);


// setInterval(() => {

//     console.log('Executando a cada 2 segundos');


// }, 2000);

// console.log('console depois do SetTimeout');


const idDoIntervalo = setInterval(() => {

    console.log('Executando a cada 2 segundos');


}, 2000);

//para limpar
clearInterval(idDoIntervalo);
// clearTimeout()