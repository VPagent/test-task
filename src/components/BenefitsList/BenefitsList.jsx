"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cutText_1 = require("../../helpers/editText/cutText");
const devideText_1 = require("../../helpers/editText/devideText");
const bs_1 = require("react-icons/bs");
const BenefitsList = ({ description, title }) => {
    return (<>
        <h3 className="secondaryTitle">{title}</h3>
        <ul className="list-square">
            {(0, devideText_1.devideText)((0, cutText_1.cutText)(description, "Compensation & Benefits:")[1]).map(elem => <li key={elem} className="flex items-center text-[#38415d]/80 lg:text-[#3A4562]">
                    <span>
                        <bs_1.BsFillSquareFill size={6} color='rgba(56, 69, 100, 0.632594)' className='mr-[5px]'/>
                    </span>
                    {elem}
                </li>)}
        </ul> 
        </>);
};
exports.default = BenefitsList;
