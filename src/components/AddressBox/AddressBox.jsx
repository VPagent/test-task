// "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomMarker_svg_1 = require("../../images/CustomMarker.svg");
const AddressBox = ({ address, inMap }) => {
    return (<p className={`flex items-center mt-[8px] text-${inMap ? "[#E7EAF0]" : "[#878D9D]"} ${!inMap && "text-[12px]"} lg:text-[16px] font-normal`}>
            <CustomMarker_svg_1.ReactComponent className={`w-[13px] h-[19px] mr-[8px] ${inMap ? "fill-[#ffffff]/70" : "fill-[#888D9D]"}`}/>
            {address}
        </p>);
};
exports.default = AddressBox;
