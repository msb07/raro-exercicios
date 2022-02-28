const desafio1asRosasNaoFalam = async () => {
  const geraIntervaloAleatorio = (): number =>
    Math.floor(Math.random() * 3 * 1000);
  const timeout = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };


  const queixoMeAsRosas = () => {
    console.log("Queixo-me às rosas");
    return timeout(geraIntervaloAleatorio());
  };

  const masQueBobagem = () => {
    console.log("Mas que bobagem");
    return timeout(geraIntervaloAleatorio());
  };

  const asRosasNaoFalam = () => {
    console.log("As rosas não falam");
    return timeout(geraIntervaloAleatorio());
  };

  const simplesmenteAsRosasExalam = () => {
    console.log("Simplesmente as rosas exalam");
    return timeout(geraIntervaloAleatorio());
  };

  const oPerfumeQueRoubamDeTi = () => {
    console.log("O perfume que roubam de ti, ai");
    return timeout(geraIntervaloAleatorio());
  };

  // Tentativa de cantar a música. Este bloco precisa ser modificado.
  await queixoMeAsRosas();
  await masQueBobagem();
  await asRosasNaoFalam();
  await simplesmenteAsRosasExalam();
  await oPerfumeQueRoubamDeTi();
};

desafio1asRosasNaoFalam();
