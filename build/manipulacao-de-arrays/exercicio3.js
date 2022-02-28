"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = void 0;
const alunos3 = [
    { nome: "João", nota: 7.3, bolsista: false },
    { nome: "Maria", nota: 9.2, bolsista: true },
    { nome: "Pedro", nota: 9.8, bolsista: false },
    { nome: "Ana", nota: 8.7, bolsista: true },
];
const pick = (records, ...args) => {
    return records.map((record) => {
        let objeto = {};
        args.forEach((arg) => {
            return (objeto[arg] = record[arg]);
        });
        return objeto;
    });
};
exports.pick = pick;
console.log((0, exports.pick)(alunos3, "nome", "bolsista"));
//# sourceMappingURL=exercicio3.js.map