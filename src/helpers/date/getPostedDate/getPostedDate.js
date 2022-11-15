"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostedDate = void 0;
const convert_1 = require("../convert");
const getPostedDate = (date) => {
    const postedDate = new Date(date);
    const currentDate = new Date();
    const delta = currentDate - postedDate;
    const deltaDay = (0, convert_1.convertMs)(delta).days;
    if (deltaDay > 365) {
        const deltaMonth = Math.round(deltaDay / 365);
        return `${deltaMonth} years`;
    }
    return deltaDay;
};
exports.getPostedDate = getPostedDate;
