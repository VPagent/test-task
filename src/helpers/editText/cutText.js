"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cutText = void 0;
const cutText = (text, word, word2) => {
    const first = text.split(word);
    const second = first[1].split(word2);
    return word2 ? second : first;
};
exports.cutText = cutText;
