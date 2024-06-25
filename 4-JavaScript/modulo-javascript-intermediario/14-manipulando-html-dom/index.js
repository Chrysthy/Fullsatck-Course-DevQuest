function adicionarComentario() {
    let inputComentario = document.getElementsByName('novo-comentario');

    // console.log(inputComentario)

    let textoDigitado = inputComentario[0].value;

    // console.log(textoDigitado)

    let novosComentarios = document.getElementById('novos-comentarios');

    novosComentarios.innerHTML += `<p>Novo comentário: ${textoDigitado} </p>`

    //Podemos fazer dessa forma também, porém o de cima é melhor
    //novosComentarios.innerHTML = novosComentarios.innerHTML + `<p>Novo comentário: ${textoDigitado} </p>`

}