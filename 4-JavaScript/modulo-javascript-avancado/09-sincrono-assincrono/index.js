//Esse código está assíncrono
function colocarAguaPraFerver() {
    console.log('colocar água para ferver');

    setTimeout(() => {

        console.log('agua ferveu');

        passarOCafe();
        
    }, 5000);

};

function prepararPraPassarOCafe() {
    console.log('pegar o pó de café');
    console.log('pegar o filtro de café');
    console.log('colocar o café no filtro');
    console.log('colocar o filtro em cima da xícara');

};

function passarOCafe() {
    console.log('passando o café');

};

colocarAguaPraFerver();
prepararPraPassarOCafe();