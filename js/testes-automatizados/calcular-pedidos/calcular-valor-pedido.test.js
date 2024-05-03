const calcularValorTotalDoPedido = require('./calcular-valor-pedido.js');


it('Não deve cobrar frete quando valor do carrinho for superior a 500', () => {

    const meuPedido = {
        itens: [
            { nome: 'Poção do Amor', valor: 1000 },
            { nome: 'Espada de Prata', valor: 50 },
            { nome: 'Entrega', valor: 40, entrega: true }
        ]
    };

    calcularValorTotalDoPedido(meuPedido);
    const resultado = calcularValorTotalDoPedido(meuPedido);
    expect(resultado).toBe(1050);
});



it('Deve cobra o valor quando o valor do carrinho for menor que 500', () => {
    const meuPedido = {
        itens: [
            { nome: 'Poção do Amor', valor: 100 },
            { nome: 'Espada de Prata', valor: 50 },
            { nome: 'Entrega', valor: 40, entrega: true }
        ]
    };

    calcularValorTotalDoPedido(meuPedido);
    const resultado = calcularValorTotalDoPedido(meuPedido);
    expect(resultado).toBe(190);  //Valor dos 2 produtos mais entrega 
});



it('Deve cobra o valor quando o valor do carrinho for 500', ()=> {

    const meuPedido = {
        itens: [
            { nome: 'Poção do Amor', valor: 450 },
            { nome: 'Espada de Prata', valor: 50 },
            { nome: 'Entrega', valor: 40, entrega: true }
        ]
    };

    calcularValorTotalDoPedido(meuPedido);
    const resultado = calcularValorTotalDoPedido (meuPedido)
    expect(resultado).toBe(540)


});


it('Adicione 20% caso a entrega seja para RS', ()=> {

    const pedidoComEstado = {
        estado: 'RS',
        itens: [
            { nome: 'Poção do Amor', valor: 500 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    };

    const resultado = calcularValorTotalDoPedido(pedidoComEstado);

    expect(resultado).toBe(620);

});

it('Adicione 20% caso a entrega seja para SC', ()=> {

    const pedidoComEstado = {
        estado: 'SC',
        itens: [
            { nome: 'Poção do Amor', valor: 500 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    };

    const resultado = calcularValorTotalDoPedido(pedidoComEstado);

    expect(resultado).toBe(620);

});