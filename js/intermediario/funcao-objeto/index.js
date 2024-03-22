let usuario = {
    nome: "Gabriel",
    idade: 20,
    excluir: function () {
        console.log("O usuario " + this.nome + " foi exluido do sistema");
    }
}


usuario.excluir ()