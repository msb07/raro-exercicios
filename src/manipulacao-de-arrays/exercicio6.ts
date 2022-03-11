type Usuario = {
  nome: string,
  idade: number,
  ativo: boolean,
}

type UsuariosAtivosEInativos = {
  usuariosAtivos: Usuario[],
  usuariosInativos: Usuario[],
};

const usuarios: Usuario[] = [
{ nome: "Diego", idade: 23, ativo: true },
{ nome: "Gabriel", idade: 15, ativo: false },
{ nome: "Lucas", idade: 30, ativo: false },
];

const estadoDoUsuario = (usuarios: Usuario[]): UsuariosAtivosEInativos => {
const usuariosAtivos: Usuario[] = [];
const usuariosInativos: Usuario[] = [];
usuarios.forEach((usuario: Usuario) => {
  if (usuario.ativo) {
    usuariosAtivos.push(usuario);
  } else {
    usuariosInativos.push(usuario);
  }
});

return {
  usuariosAtivos,
  usuariosInativos
};
};

const {
usuariosAtivos,
usuariosInativos
} = estadoDoUsuario(usuarios);

console.log(usuariosAtivos, usuariosInativos);