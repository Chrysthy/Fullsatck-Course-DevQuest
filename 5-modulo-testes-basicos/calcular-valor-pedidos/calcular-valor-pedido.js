const meuPedido = {

    itens: [
        { nome: 'Poção de vida', valor: 100 },
        { nome: 'Espada de prata', valor: 1000 },
        { nome: 'Entrega', valor: 40, entrega: true }
    ]

}

const calcularValorPedido = pedido =>
    pedido.itens.reduce((totalPedidos, pedidoAtual) => totalPedidos + pedidoAtual.valor, 0)

console.log(calcularValorPedido(meuPedido));
