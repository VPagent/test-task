"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MobileCard_1 = __importDefault(require("../MobileCard/MobileCard"));
const ItemsList = ({ items }) => {
    return (<>
        {items && <ul>
            {items.length > 0 && items.map(elem => <MobileCard_1.default elem={elem} key={elem.id}/>)}
        </ul>}
        </>);
};
exports.default = ItemsList;
