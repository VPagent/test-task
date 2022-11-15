"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getPostedDate_1 = require("../../helpers/date/getPostedDate/getPostedDate");
const PostedDateBox = ({ createdAt, big }) => {
    return (<p className={`text-xs text-[#38415D]/30 text-[13px] font-light lg:text-[${big ? "18px" : "16px"}] lg:font-normal`}>
            Posted {(0, getPostedDate_1.getPostedDate)(createdAt)} ago
        </p>);
};
exports.default = PostedDateBox;
