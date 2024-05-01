

const meuPedido = {
    itens: [
        { nome: 'Poção do Amor', valor: 100 },
        { nome: 'Espada de Prata', valor: 50 },
        { nome: 'Entrega', valor: 40, entrega: true }
    ]
};

const calcularValorTotalDoPedido = pedido => {
    const valorProdutos = pedido.itens
        .filter(item => !item.entrega)
        .reduce((totalPedidos, pedidoAtual) => totalPedidos + pedidoAtual.valor, 0); // Inicializando o total com zero

    const valorEntrega = pedido.itens
        .filter(item => item.entrega)
        .reduce((totalEntrega, entregaAtual) => totalEntrega + entregaAtual.valor, 0); // Somando o valor de todas as entregas

    if (valorProdutos > 500) {
        return valorProdutos;
    } else {
        return valorProdutos + valorEntrega; // Adicionando o valor da entrega ao total, se necessário
    }
} 
