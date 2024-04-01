let pessoas = [
    { nome: 'Roberto' , idade: 33},
    { nome: 'Alberto' , idade: 33},
    { nome: 'Joberto' , idade: 12},
];

let x = prompt("digite a idade:")


// let pessoaComIdadeDe33 = pessoas.filter(function(pessoa){
//     return pessoa.idade == x
// });

let pessoaComIdadeDe33 = pessoas.filter((pessoa) => {
    return pessoa.idade == x;
});

console.table(pessoaComIdadeDe33)
