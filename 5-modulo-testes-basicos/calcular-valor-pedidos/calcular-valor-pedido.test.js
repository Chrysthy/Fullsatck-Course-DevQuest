const calcularValorPedido = require('./calcular-valor-pedido.js')

it('não deve cobrar valor de frete quando o valor dos produtos for superior a 500', () => {

    // AAA - 3 PASSOS DE CRIAÇÃO DE UM TESTE

    // ARRANGE - ARRUMAR - O OBJETO DE TESTE
    const meuPedido = {

        itens: [
            { nome: 'Arco encantado', valor: 2000 },
            { nome: 'Entrega', valor: 40, entrega: true }
        ]

    }

    // ACT - AGIR (AÇÃO) - O QUE VAI SER TESTADO
    const resultado = calcularValorPedido(meuPedido)

    // ASSERT - AFIRMAR (ASSERÇÃO) - QUAL O RESULTADO ESPERADO
    expect(resultado).toBe(2000)
})