"use strict";
const alunos4 = [
    { nome: "João", nota: 7.3, bolsista: false },
    { nome: "Maria", nota: 9.8, bolsista: true },
    { nome: "Pedro", nota: 9.1, bolsista: false },
    { nome: "Ana", nota: 7.3, bolsista: true },
];
let orderBy = (records, ...args) => {
    const alunosOrdenados = [...records];
    args.reverse().map((arg) => {
        return alunosOrdenados.sort((a, b) => {
            if (a[arg] > b[arg]) {
                return 1;
            }
            else if (a[arg] < b[arg]) {
                return -1;
            }
            return 0;
        });
    });
    return alunosOrdenados;
};
console.log(orderBy(alunos4, "nota", "nome"));
// tenho uma dúvida nessa questão que seria o seguinte:
// caso eu exporte a função pick do exercicio 3, como eu aproveitaria os argumentos passados pela função orderBy?
//# sourceMappingURL=exercicio4%20.js.map