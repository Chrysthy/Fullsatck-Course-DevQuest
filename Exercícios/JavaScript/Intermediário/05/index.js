const imagens = document.querySelectorAll('.slide');
const setaVoltar = document.getElementById('seta-voltar');
const setaAvancar = document.getElementById('seta-avancar');

let imagemAtual = 0;

setaAvancar.addEventListener('click', function () {

    if (imagemAtual === imagens.length - 1) {
        return;
    }


    esconderImagemAberta();

    imagemAtual++;

    imagens[imagemAtual].classList.add('mostrar');

});


function esconderImagemAberta() {
    ;
    const imagemAberta = document.querySelector('.mostrar');

    imagemAberta.classList.remove('mostrar');
}