//call back hell 


let chaleiraEstaNoFogao = true
let fogaoEstaLigado = a


let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {

    return new Promise((resolve, reject) => {
        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log("Fervendo agua");
            resolve();
        } else {
            console.log("Nao fazendo cafe");
            reject();
        }
    });
};

let passarCafe = () => {
    console.log("Voce pode passar o cafe");
}

//Usando o then deixas as funçoes dependentes umas das outras

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado).then( passarCafe);