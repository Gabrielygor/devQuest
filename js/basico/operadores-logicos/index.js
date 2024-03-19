
// Const é constante 
//Let pode set mudada 


const pessoa = null

let numeroInt = 123

numeroInt = 12

if (numeroInt === "123") {
    oi()
} else if (numeroInt == 12) {
    nIgual()
} else {
    console.log("dasdasd")
}

function oi() {
    console.log('oi');
}

function nIgual() {
    console.log("Não é igual")
}

const a = 2
const b = 2

console.log(a === b && a <= b);
