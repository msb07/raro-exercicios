"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const desafio1asRosasNaoFalam = () => __awaiter(void 0, void 0, void 0, function* () {
    const geraIntervaloAleatorio = () => Math.floor(Math.random() * 3 * 1000);
    const timeout = (ms) => {
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
    yield queixoMeAsRosas();
    yield masQueBobagem();
    yield asRosasNaoFalam();
    yield simplesmenteAsRosasExalam();
    yield oPerfumeQueRoubamDeTi();
});
desafio1asRosasNaoFalam();
//# sourceMappingURL=exercicio4.js.map