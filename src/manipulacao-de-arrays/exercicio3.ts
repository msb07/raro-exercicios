const alunos3 = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Pedro", nota: 9.8, bolsista: false },
  { nome: "Ana", nota: 8.7, bolsista: true },
];

export const pick = <T extends Record<string, unknown>>(
  records: T[],
  ...args: (keyof T)[]
): Record<string, unknown>[] => {
  return records.map((record) => {
    let objeto: Record<string, unknown> = {};
    args.forEach((arg) => {
      return ((objeto as T)[arg] = record[arg]);
    });
    return objeto;
  });
};

console.log(pick(alunos3, "nome", "bolsista"));