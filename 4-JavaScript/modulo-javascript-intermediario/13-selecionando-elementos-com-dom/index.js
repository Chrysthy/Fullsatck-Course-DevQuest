// console.log(document);

//Buscar por ID #
let p = document.getElementById('paragrafo1')

console.log(p);

//Buscar por class .
let inputsPorClasse = document.getElementsByClassName('tag-de-input')

console.log(inputsPorClasse);

//Buscar pelo nome da Tag
let inputTag = document.getElementsByTagName('h1')

console.log(inputTag);

//Buscar pelo atributo name
let inputPorName = document.querySelectorAll("input[name='email']")

console.log(inputPorName[1]);