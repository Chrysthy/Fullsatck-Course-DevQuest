const meuPedido = {

    itens: [
        { nome: 'Poção de vida', valor: 100 },
        { nome: 'Espada de prata', valor: 1000 }
    ]

}

const calcularValorPedido = pedido =>
    pedido.itens.reduce((totalPedidos, pedidoAtual) => totalPedidos + pedidoAtual.valor, 0)