/* Possui 4 estados

1. Pendente
2. Realizada (Resolve)
3. Recusada (Reject)
4. Estabelecida

*/

//recebe dois parâmetros: resolve e reject
// new Promise((resolve, reject) => {

// })



let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {

    return new Promise((resolve, reject) => {

        if (chaleiraEstaNoFogao && fogaoEstaLigado) {

            console.log("começando o processo de ferver a água");

            resolve();


        } else {

            console.log("é necessário ligar o fogão e colocar a chaleira  para fever a água");

            reject();

        };

    });
};

let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado);
console.log("fazendo café");
