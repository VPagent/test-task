"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fi_1 = require("react-icons/fi");
const bs_1 = require("react-icons/bs");
const fi_2 = require("react-icons/fi");
const react_responsive_1 = require("react-responsive");
const react_1 = require("react");
const state_1 = __importDefault(require("../../globalState/state"));
const ControlsSingle = ({ inSingle, id }) => {
    const isDesktop = (0, react_responsive_1.useMediaQuery)({ query: '(min-width: 1200px)' });
    const [added, setAdded] = state_1.default.useGlobalState('added');
    const isAdded = added === null || added === void 0 ? void 0 : added.some(elem => elem === id);
    const storage = JSON.parse(localStorage.getItem("added"));
    (0, react_1.useEffect)(() => {
        if ((storage === null || storage === void 0 ? void 0 : storage.length) <= 0) {
            localStorage.setItem("added", JSON.stringify(added));
        }
        if ((storage === null || storage === void 0 ? void 0 : storage.length) > 0) {
            setAdded(JSON.parse(localStorage.getItem("added")));
        }
    }, []);
    (0, react_1.useEffect)(() => {
        if (added) {
            localStorage.setItem("added", JSON.stringify(added));
        }
    }, [added]);
    const handleClickAdd = () => {
        if (isAdded) {
            setAdded(prev => prev.filter(elem => elem !== id));
            return;
        }
        if (added) {
            setAdded(prev => [...prev, id]);
        }
        if (!added) {
            setAdded([id]);
        }
    };
    return (<div className={`flex ${!isDesktop && "pt-[24px] pb-[32px]"} ${!inSingle && "ml-auto"}`}>
            <span onClick={handleClickAdd} className={`flex items-center ${inSingle ? "mr-9" : "mr-0"}`}>
                {inSingle && (isDesktop ?
            <fi_2.FiBookmark color='#70778B' fill={isAdded ? '#70778B' : 'transparent'} size={20} className='mr-[11px] lg:mr-[8px]'/>
            : <fi_1.FiStar className='mr-[11px]' fill={isAdded ? '#FFFF00' : 'transparent'}/>)}
                {isDesktop && !inSingle &&
            <fi_2.FiBookmark color='#70778B' fill={isAdded ? '#70778B' : 'transparent'} size={20}/>}
                {inSingle && "Save to my list"}
            </span>
            {inSingle &&
            <span className='flex items-center'>
                <bs_1.BsShareFill color='#70778B' className='mr-[11px] lg:mr-[8px]'/>
                Share
            </span>}           
        </div>);
};
exports.default = ControlsSingle;
