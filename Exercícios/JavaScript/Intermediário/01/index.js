/* 
    Dica: Começar pensando no objetivo do que precisa fazer e no passo a passo pra chegar lá é essencial.

    Objetivo do exercício: ao clicar no botão o fundo do quadrado azul deve trocar para a cor amarela

        Passo 1 - Pegar o elemento do botão aqui no JS

        Passo 2 - Pegar o elemento do quadrado azul aqui no JS

        Passo 3 - Quando o usuário clicar no botão precisamos disparar a ação de mudar a cor do fundo do quadrado azul

        Passo 4 - Para mudar a cor de fundo podemos adicionar e remover as classes que o elemento tem
*/


let btnOne = document.getElementById('btn-1')
let btnTwo = document.getElementById('btn-2')

let azul = document.querySelector('.azul')
let verde = document.querySelector('.verde')

btnOne.addEventListener('click', trocarCorOne)

function trocarCorOne() {
  azul.classList.remove('azul')
  azul.classList.add('amarelo')
}

btnTwo.addEventListener('click', trocarCorTwo)

function trocarCorTwo() {
  verde.classList.remove('verde')
  verde.classList.add('rosa')
}