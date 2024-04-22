
let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true


let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {

    return new Promise((resolve, reject) => {
        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log("Fazendo cafe");
            resolve()
        } else {
            console.log("Nao fazendo cafe");
            reject()
        }
    });
};

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)