let usuario = {
    nome: 'Chrystine',
    excluir: function () {
        console.log('O usuário, ' + this.nome + ' foi excluído!')
    }

}

usuario.excluir()