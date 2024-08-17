/*
Sintaxe

function (a, b, ...args) {
    ...
}

*/

function incentivarQuester(mensagem, ...nomesQuester) {

    nomesQuester.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`));

}

incentivarQuester('Parabéns por ter chegado ao módulo de JS Avançado,', 'Chrystine.', 'Noob.', 'Leon.')