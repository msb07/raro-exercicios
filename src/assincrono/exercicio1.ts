const desafio1asRosasNaoFalamCallback = () => {
  type callbackFn = () => void;
  const geraIntervaloAleatório = () => Math.floor(Math.random() * 3 * 1000);

  // métodos de versos. Estes métodos deverão ser modificados.
  const queixoMeAsRosas = (callback: callbackFn) => {
    setTimeout(() => {
      console.log("Queixo-me às rosas");
      return callback()
    }, geraIntervaloAleatório());
  };

  const masQueBobagem = (callback: callbackFn) => {
    setTimeout(() => {
      console.log("Mas que bobagem");
      return callback()
    }, geraIntervaloAleatório());
  };

  const asRosasNaoFalam = (callback: callbackFn) => {
    setTimeout(() => {
      console.log("As rosas não falam");
      return callback();
    }, geraIntervaloAleatório());
  };

  const simplesmenteAsRosasExalam = (callback: callbackFn) => {
    setTimeout(() => {
      console.log("Simplesmente as rosas exalam");
      return callback();
    }, geraIntervaloAleatório());
  };

  const oPerfumeQueRoubamDeTi = (callback: callbackFn) => {
    setTimeout(() => {
      console.log("O perfume que roubam de ti, ai");
      return callback();
    }, geraIntervaloAleatório());
  };

  queixoMeAsRosas(() => {
    masQueBobagem(() => {
      asRosasNaoFalam(() => {
        simplesmenteAsRosasExalam(() => {
          oPerfumeQueRoubamDeTi(()=>{
            console.log('devias vir, para ver meus olhos tristonhos')
          });
        });
      });
    });
  });
};

desafio1asRosasNaoFalamCallback();
