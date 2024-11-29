const calcularValorPedido = require('./calcular-valor-pedido.js')

it('não deve cobrar valor de frete quando o valor dos produtos for superior a 500', () => {

    const meuPedido = {

        itens: [
            { nome: 'Arco encantado', valor: 2000 },
            { nome: 'Entrega', valor: 40, entrega: true }
        ]
    
    }
   
    const resultado = calcularValorPedido(meuPedido)

    expect(resultado).toBe(2000)
})