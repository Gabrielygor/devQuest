

let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {

        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log("Passo 1 finalizado");
            resolve();
        } else {
            console.log("Nao foi possivel realizar o primeiro passo.");
            reject();
        };

    });
};

let passarOCafe = (aguaFervida) => {
    return new Promise((resolve) => {
        console.log("Passo 2 finalizado");
        resolve(true);
    });
};

let tomarCafe = (cafePassado) => {
    new Promise((resolve) => {
        console.log("Passo 3 finalizado");
        resolve(true);
    });
};

let lavarXicara = () => {
    new Promise((resolve) => {
        console.log("Passo 4 finalizado");
        resolve(true);
    });
};

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true


async function iniciarProcessoDeFazerCafe() {

    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado) 
    const cafePassado = await passarOCafe(aguaFervida)
    const cafeTomado = await tomarCafe(cafePassado)
    const lavarAXicara = await lavarXicara(cafeTomado)

    if(lavarAXicara) console.log("Trabalhar depois do cafe");
};

iniciarProcessoDeFazerCafe();



