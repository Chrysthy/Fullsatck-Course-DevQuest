function calcularFatorial(numero) {
    let resultado = 1;

    for (let i = 1; i <= numero; i++) {
        console.log(`O valor do i é: ${i}`);
        resultado *= i;
        console.log(`O valor do resultado é: ${resultado}`);
        // resultado = resultado * i;
    }

    return resultado;

}

function imprimirFatorial(numero) {
    const fatorial = calcularFatorial(numero);
    console.log(`O fatorial de ${numero} é ${fatorial}`);
}

const numero = 5;
imprimirFatorial(numero);


