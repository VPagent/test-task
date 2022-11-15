// "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bi_1 = require("react-icons/bi");
const addZero_1 = require("../../helpers/addZero/addZero");
const SalaryBox = ({ salary }) => {
    return (<p className="flex flex-col text-end lg:text-start lg:ml-[60px] lg:flex-col-reverse font-[18px] font-normal ">
            Brutto, per year<br />
            <span className="flex items-center font-[20px] font-bold">
                <bi_1.BiEuro />{(0, addZero_1.addZero)(salary)}
            </span>
        </p>);
};
exports.default = SalaryBox;
