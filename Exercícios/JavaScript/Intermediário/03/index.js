/*
        Dica: Começar pensando no objetivo do que precisa fazer e no passo a passo pra chegar lá é essencial.
    
    NÂO SAIA TENTANDO ESCREVER CÓDIGO! Antes disso você precisa saber O QUE precisa ser feito e só depois COMO fazer.

        Objetivo do exercício: Verificar se o elemento possui uma classe, se não tiver deverá ser adicionada. Caso existir, remover essa classe.
	
        Passo 1 - Pegar o elemento do quadrado azul no JS.

        Passo 2 - Quando o usuário clicar no quadrado, precisamos disparar a ação de verificar se a cor do quadrado é a cor azul.

        Passo 3 - Criamos uma varíavel que irá verificar se a classe contém a cor azul. 

        Passo 4 - Fazer a verificação utilizando essa varíavel criada, se ela existir, é removida a classe azul do quadrado. 
                        	
        Passo 5 - Caso não ter a cor azul, é adicionada a classe e o alerta deve ser disparado.
    	
*/

let quadrado = document.querySelector('.quadrado')

quadrado.addEventListener('click', () => {
    let contemAzul = quadrado.classList.contains('roxo')

    if (contemAzul) {
        quadrado.classList.remove('roxo')

    } else {
        quadrado.classList.add('roxo')
    }


})

