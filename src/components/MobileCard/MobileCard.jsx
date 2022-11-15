"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FavoritesBar_1 = __importDefault(require("../FavoritesBar/FavoritesBar"));
const react_router_dom_1 = require("react-router-dom");
const state_1 = __importDefault(require("../../globalState/state"));
const PostedDateBox_1 = __importDefault(require("../PostedDateBox/PostedDateBox"));
const react_responsive_1 = require("react-responsive");
const AddressBox_1 = __importDefault(require("../AddressBox/AddressBox"));
const ControlsSingle_1 = __importDefault(require("../ControlsSingle/ControlsSingle"));
const cutTitle_1 = __importDefault(require("../../helpers/editText/cutTitle"));
const DepartmentBox_1 = __importDefault(require("../DepartmentBox/DepartmentBox"));
const MobileCard = ({ elem }) => {
    const [singleItem, setSingleItem] = state_1.default.useGlobalState('singleItem');
    const navigate = (0, react_router_dom_1.useNavigate)();
    const isDesktop = (0, react_responsive_1.useMediaQuery)({ query: '(min-width: 1200px)' });
    const handleClick = () => {
        setSingleItem(elem);
        navigate(`${elem.id}`);
    };
    return (<li key={elem.id} className="card">
      <div className="imgBox">
        <img src={elem.pictures[1]} alt={elem.name} className="img"/>
      </div>
      <div className="w-72 lg:w-[650px]">
          <div className="flex justify-between items-center">
            {!isDesktop && <FavoritesBar_1.default />}
            {!isDesktop && <PostedDateBox_1.default createdAt={elem.createdAt} big={false}/>}
          </div>
          <h2 className="cardTitle" onClick={handleClick}>
            {isDesktop ? elem.title : (0, cutTitle_1.default)(elem.title)}
          </h2>
          <DepartmentBox_1.default name={elem.name}/>
          <AddressBox_1.default address={elem.address}/>
      </div>
        <div className='lg:ml-auto lg:mr-[32px] lg:my-auto'>{isDesktop && <FavoritesBar_1.default />}</div>
        <div className="flex flex-col  justify-between text-end">
          {isDesktop && <ControlsSingle_1.default inSingle={false} id={elem.id}/>}
          {isDesktop && <PostedDateBox_1.default createdAt={elem.createdAt} big={false}/>}
        </div>
    </li>);
};
exports.default = MobileCard;
