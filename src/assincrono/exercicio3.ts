const desafio1asRosasNaoFalamPromise = () => {
    const geraIntervaloAleatorio = (): number => Math.floor(Math.random() * 3 * 1000);
    const timeout = (ms: number): Promise<void> => {
      return new Promise(resolve => setTimeout(resolve, ms))
    };
  
    // métodos de versos. Estes métodos deverão ser modificados.
    const queixoMeAsRosas = () => {
      console.log('Queixo-me às rosas');
      return timeout(geraIntervaloAleatorio());
    };
  
    const masQueBobagem = () => {
      console.log('Mas que bobagem');
      return timeout(geraIntervaloAleatorio());
    };
  
    const asRosasNaoFalam = () => {
      console.log('As rosas não falam');
      return timeout(geraIntervaloAleatorio());
    };
  
    const simplesmenteAsRosasExalam = () => {
      console.log('Simplesmente as rosas exalam');
      return timeout(geraIntervaloAleatorio());
    };
  
    const oPerfumeQueRoubamDeTi = () => {
      console.log('O perfume que roubam de ti, ai');
      return timeout(geraIntervaloAleatorio());
    };
  
    // Tentativa de cantar a música. Este bloco precisa ser modificado.
    queixoMeAsRosas()
    .then(() => masQueBobagem())
    .then(() => asRosasNaoFalam())
    .then(() => simplesmenteAsRosasExalam())
    .then(() => oPerfumeQueRoubamDeTi());
  }
  
  desafio1asRosasNaoFalamPromise();