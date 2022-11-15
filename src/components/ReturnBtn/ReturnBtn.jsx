"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const md_1 = require("react-icons/md");
const ReturnBtn = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    return (<button onClick={() => navigate("/")} className='flex px-[26px] py-[18px] bg-[#d3cfcf] rounded-md mr-auto ml-auto items-center lg:ml-0'>
            <md_1.MdOutlineArrowBackIos color="#384564" size={19}/>
            <p className='text-[#384564] text-[12px] font-semibold uppercase'>Return to job board</p>
        </button>);
};
exports.default = ReturnBtn;
