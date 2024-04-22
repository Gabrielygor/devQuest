function colocarAguaParaFerver() {
    console.log("ferver");

    setTimeout(() => {
        console.log("agua ferveu");
        passarOCafe();
    }, 5000);
};

function prepararPraPassarOCafe() {
    console.log("Pegar o po");
    console.log("Pegar o filtro");
    console.log("Pegar io po");
    console.log("Pegar io po");
    console.log("Pegar io po");
};

function passarOCafe () {
    console.log("passar o cafe");
};

colocarAguaParaFerver();
prepararPraPassarOCafe();