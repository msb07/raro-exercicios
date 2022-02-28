"use strict";
const desafio1asRosasNaoFalamCallback = () => {
    const geraIntervaloAleatório = () => Math.floor(Math.random() * 3 * 1000);
    // métodos de versos. Estes métodos deverão ser modificados.
    const queixoMeAsRosas = (callback) => {
        setTimeout(() => {
            console.log("Queixo-me às rosas");
            return callback();
        }, geraIntervaloAleatório());
    };
    const masQueBobagem = (callback) => {
        setTimeout(() => {
            console.log("Mas que bobagem");
            return callback();
        }, geraIntervaloAleatório());
    };
    const asRosasNaoFalam = (callback) => {
        setTimeout(() => {
            console.log("As rosas não falam");
            return callback();
        }, geraIntervaloAleatório());
    };
    const simplesmenteAsRosasExalam = (callback) => {
        setTimeout(() => {
            console.log("Simplesmente as rosas exalam");
            return callback();
        }, geraIntervaloAleatório());
    };
    const oPerfumeQueRoubamDeTi = (callback) => {
        setTimeout(() => {
            console.log("O perfume que roubam de ti, ai");
            return callback();
        }, geraIntervaloAleatório());
    };
    queixoMeAsRosas(() => {
        masQueBobagem(() => {
            asRosasNaoFalam(() => {
                simplesmenteAsRosasExalam(() => {
                    oPerfumeQueRoubamDeTi(() => {
                        console.log('devias vir, para ver meus olhos tristonhos');
                    });
                });
            });
        });
    });
};
desafio1asRosasNaoFalamCallback();
//# sourceMappingURL=exercicio1.js.map