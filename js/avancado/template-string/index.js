let ordens = [
    { nome: 'Roberto' , tipo: 'compra' , quantidade: 12},
    { nome: 'Alberto' , tipo: 'compra' , quantidade: 12},
    { nome: 'Joberto' , tipo: 'venda' , quantidade: 12},
];


let quantidadeDeOrdens = ordens.reduce(function(quantidadeDeOrdens, ordem) {

    return quantidadeDeOrdens + ordem.quantidade;
});


console.table(quantidadeDeOrdens)

