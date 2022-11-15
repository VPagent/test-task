"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addZero = void 0;
const addZero = (salary) => {
    const parse = salary.split("-");
    const firstParse = parseFloat(parse[0]);
    const secondParse = parseFloat(parse[1]);
    return ` ${firstParse} 000 - ${secondParse} 000`;
};
exports.addZero = addZero;
