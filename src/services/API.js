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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllItems = void 0;
const getAllItems = (page = 1) => __awaiter(void 0, void 0, void 0, function* () {
    const BASE_URL = `https://api.json-generator.com/templates/ZM1r0eic3XEy/data?page=${page}`;
    const token = "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";
    const response = yield fetch(BASE_URL, {
        headers: {
            "Authorization": `Bearer ${token}`
        },
    }).then(res => res.json());
    return response;
});
exports.getAllItems = getAllItems;
