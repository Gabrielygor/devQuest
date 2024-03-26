

function adicionarComentario() {

    let novoComentario = document.getElementsByName('novo-comentario');

    let textoDigitado = novoComentario[0].value;

    let novosComentarios = document.getElementById ('novos-comentarios')

    novosComentarios.innerHTML += `<p> Novo Comentario: ${textoDigitado} </p>`

}