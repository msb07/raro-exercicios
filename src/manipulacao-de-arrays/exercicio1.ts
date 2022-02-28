const ingredientes = [
  "2 hambúrgueres",
  "alface",
  "queijo",
  "molho especial",
  "cebola",
  "picles",
  "pão com gergelim",
];

const fazUmBigMac = (arr: string[]): string => {
  return arr.reduce((acumulador, valorAtual) => {
    return `${acumulador} ${valorAtual}`;
  });
};

fazUmBigMac(ingredientes);
