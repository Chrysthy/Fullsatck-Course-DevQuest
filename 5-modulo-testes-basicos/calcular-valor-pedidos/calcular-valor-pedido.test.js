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
});

it('deve cobrar valor de frete quando o valor dos produtos for menor a 500', () => { 

    const meuPedido = {

        itens: [
            { nome: 'Sanduíche', valor: 50 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]

    };

    const resultado = calcularValorPedido(meuPedido);

    expect(resultado).toBe(150);


})

it('deve cobrar valor de frete quando o valor dos produtos for EXATAMENTE 500', () => { 

    const meuPedido = {

        itens: [
            { nome: 'Sanduíche bem caro', valor: 500 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]

    };

    const resultado = calcularValorPedido(meuPedido);

    expect(resultado).toBe(600);

})

//caso os estados de entrega sejam de RS ou SC, deve-se acrescentar um valor de 20% na entrega

it('deve adicionar um acréscimo de 20% no valor da entrega seja RS', () => {

    const pedidoComEstadado = {
        estado: 'RS',

        itens: [
            { nome: 'Sanduíche bem caro', valor: 500 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]

    };

    const resultado = calcularValorPedido(pedidoComEstadado);

    expect(resultado).toBe(620);

});


it('deve adicionar um acréscimo de 20% no valor da entrega seja SC', () => {

    const pedidoComEstadado = {
        estado: 'SC',

        itens: [
            { nome: 'Sanduíche bem caro', valor: 500 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]

    };

    const resultado = calcularValorPedido(pedidoComEstadado);

    expect(resultado).toBe(620);

});

it('não deve adicionar um acréscimo de 20% no valor da entrega seja SP', () => {

    const pedidoComEstadado = {
        estado: 'SP',

        itens: [
            { nome: 'Sanduíche bem caro', valor: 500 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]

    };

    const resultado = calcularValorPedido(pedidoComEstadado);

    expect(resultado).toBe(600);

});