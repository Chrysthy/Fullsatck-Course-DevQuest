let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {

    return new Promise((resolve, reject) => {

        if (chaleiraEstaNoFogao && fogaoEstaLigado) {

            console.log("Passo 1 finalizado: Água for fervida");

            resolve();


        } else {

            console.log("é necessário colocar a chaleira com a água e ligar o fogão, senão o seu cafézinho não vai ficar pronto nunca");

            reject();

        };

    });
};

let passarOCafe = (aguaFervida) => {

    return new Promise((resolve) => {

        console.log("Passo 2 finalizado: Café foi passado");

        resolve(true);

    });

};

let tomarCafe = (cafePassado) => {

    return new Promise((resolve) => {

        console.log("Passo 3 finalizado: Terminei de tomar café");

        resolve(true);

    });
};

let lavarXicara = (cafeTomado) => {

    return new Promise((resolve) => {

        console.log("Passo 4 finalizado: Terminei de lavar a xícara");

        resolve(true);
    });
};

let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;

async function iniciarProcessoDeFazerCafe() {
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)

    console.log(aguaFervida);

}

iniciarProcessoDeFazerCafe()