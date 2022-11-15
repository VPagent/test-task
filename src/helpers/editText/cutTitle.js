"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cutTitle = (title) => {
    const ed = title.split(' ').slice(0, 5).join(" ");
    return `${ed}...`;
};
exports.default = cutTitle;
