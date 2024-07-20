// const imprimirInformacoesPessoas = (primeiroNome, ultimoNome, idade) => {

//     return "Primeiro Nome: " + primeiroNome + ", último Nome: " + ultimoNome + ". " + "Idade: " + idade
// }

// console.log(imprimirInformacoesPessoas("Noob", "Saibot", 14));


const imprimirInformacoesPessoas = (primeiroNome, ultimoNome, idade) => {

    return ` Primeiro Nome: ${primeiroNome}, Último Nome: ${ultimoNome}. Idade ${idade}`
}

// console.log(imprimirInformacoesPessoas("Noob", "Saibot", 14));


//chamando uma função dentro do template literal

console.log(`${imprimirInformacoesPessoas("Noob", "Saibot", 14)}, ele é um gato gordo.`);

//Podemos fazer uma so,a
console.log(`Soma ${10 + 20}`);