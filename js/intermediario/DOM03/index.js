
// let posts = document.getElementsByClassName('post');
// let primeiropost = posts[0];

// primeiropost.style.backgroundColor ='black'

// console.log(primeiropost);

const botao = document.querySelector('.btn-mudar-tema')
const elementoTema = document.querySelector('.texto-post')


botao.addEventListener('click', () => {
    elementoTema.classList.toggle('fonte-grande')
})


console.log(botao);
