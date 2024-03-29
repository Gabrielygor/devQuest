
const botoes = document.querySelectorAll(".botao")
const conteudos = document.querySelectorAll(".conteudo")

botoes.forEach((botao , index) => {
    botao.addEventListener("click", () => {
        conteudos[index].classList.toggle("escondido"); 
        botao.classList.toggle("branco")
    });
});
