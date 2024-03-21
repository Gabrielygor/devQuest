

const calc = function(idade, mesDeNascimento, imprimir ) {

    const mesAtual = 2
    let anoDeNascimento = 2021 - idade

    if(mesDeNascimento > mesAtual) {
        anoDeNascimento --
    } 

    imprimir(anoDeNascimento)
}

let imprimirAnoDeNascimento = anoDeNascimento => {
    console.log(anoDeNascimento);
}

calc (33, 3 , imprimirAnoDeNascimento)