// "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fa_1 = require("react-icons/fa");
const react_responsive_1 = require("react-responsive");
const FavoritesBar = () => {
    const isDesktop = (0, react_responsive_1.useMediaQuery)({ query: '(min-width: 1200px)' });
    const random = Math.floor(Math.random() * 6);
    const finRandom = random === 0 ? 2 : random;
    const fakeArr = Array(finRandom).fill("j");
    return (<div className='flex lg:w-[100px] justify-start'>
            {fakeArr.map(elem => <fa_1.FaStar key={Math.random()} size={isDesktop ? 18 : 10} color={"#38415D"}/>)}
        </div>);
};
exports.default = FavoritesBar;
