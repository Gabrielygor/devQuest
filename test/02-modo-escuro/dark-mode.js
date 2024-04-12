const btnTema = document.querySelector(".botao-tema")
const body = document.querySelector("body")

const btnTemaImagemSol = document.querySelector(".sol")
const btnTemaImagemLua = document.querySelector(".lua")



btnTema.addEventListener("click", () => {
    body.classList.toggle("dark-theme")
    btnTemaImagemSol.classList.toggle("escondido")
    btnTemaImagemLua.classList.toggle("aparecendoo")
});

//Ganbiara do krai mas funciona kkkkkkkkkkkkkkkkkkkk
//kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk