let pessoas = [
    { nome: 'Roberto' , idade: 33},
    { nome: 'Alberto' , idade: 33},
    { nome: 'Joberto' , idade: 12},
];


let nomeDasPessoas = pessoas.map(function(pessoa){
    return pessoa.nome + ' oi';
});


console.table(nomeDasPessoas)

