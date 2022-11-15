"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cutText_1 = require("../../helpers/editText/cutText");
const Responsibilities = ({ description, title }) => {
    return (<>
        <h3 className="secondaryTitle">{title}</h3>
        <p className="mainText">
            {(0, cutText_1.cutText)(description, "Responsopilities:", "Compensation & Benefits:")[0]}
        </p>
        </>);
};
exports.default = Responsibilities;
