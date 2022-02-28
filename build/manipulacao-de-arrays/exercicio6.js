"use strict";
const usuarios = [
    { nome: "Diego", idade: 23, ativo: true },
    { nome: "Gabriel", idade: 15, ativo: false },
    { nome: "Lucas", idade: 30, ativo: false },
];
const estadoDoUsuário = (usuarios) => {
    const usuariosAtivos = [];
    const usuariosInativos = [];
    return usuarios.map((usuario) => {
        if (usuario.ativo === true) {
            return usuariosAtivos.push(usuario.nome);
        }
        else {
            return usuariosInativos.push(usuario.nome);
        }
    });
};
//# sourceMappingURL=exercicio6.js.map