"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.devideText = void 0;
const devideText = (text) => {
    const first = text.split(".").filter(elem => elem !== "\n\n");
    return first;
};
exports.devideText = devideText;
