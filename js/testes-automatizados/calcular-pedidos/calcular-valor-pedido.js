



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


module.exports = calcularValorTotalDoPedido