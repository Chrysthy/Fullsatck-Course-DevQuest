function alterarCorDeFundoPrimeiroPost() {
    let posts = document.getElementsByClassName('post');

    console.log(posts)

    let primeiroPost = posts[0];
    console.log('primeiroPost', primeiroPost);

    primeiroPost.style.backgroundColor = 'plum';

    //conseguimos alterar qualquer tipo de propriedade CSS só usando o objeto style e a propriedade: font, cor, etc.

}

function aumentarFonteSegundoPost() {
    let textoPosts = document.getElementsByClassName('texto-post');

    console.log(textoPosts[1].classList)

    textoPosts[1].classList.add('fonte-grande', 'cor-letra')

    //conseguimos adicionar qualquer tipo de propriedade CSS usando o .add e o nome da class ou ID que está no arquivo css ou no head do HTML

}

function marcarRadio(genero) {
    // console.log(genero)

    let radioMasculino = document.getElementById('genero-masculino');

    let radioFeminino = document.getElementById('genero-feminino');

    if (genero === 'M') {
        radioMasculino.checked = true;

    } else if (genero === 'F') {
        radioFeminino.checked = true;
    }
}


