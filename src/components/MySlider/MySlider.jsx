"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_slick_1 = __importDefault(require("react-slick"));
const react_responsive_1 = require("react-responsive");
require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");
const MySlider = ({ pictures }) => {
    const isDesktop = (0, react_responsive_1.useMediaQuery)({ query: '(min-width: 1200px)' });
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };
    return (<>
        <h3 className="font-bold py-2.5 border-b border-gray-200 mb-[20px]">Attached images</h3>
        <react_slick_1.default {...settings}>
            {pictures.map(elem => (<div key={elem}>
                <img src={elem} alt="firstPicture" className="w-36 rounded-md"/>
                </div>))}                
        </react_slick_1.default>
        </>);
};
exports.default = MySlider;
