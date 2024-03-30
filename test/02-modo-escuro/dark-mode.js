const btnTema = document.querySelector(".botao-tema")
const body = document.querySelector("body")


btnTema.addEventListener("click", () => {
    body.classList.toggle("dark-theme")
    console.log(body);
});