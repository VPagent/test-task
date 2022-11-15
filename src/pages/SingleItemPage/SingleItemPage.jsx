// "use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Container_1 = __importDefault(require("../../components/Container/Container"));
const ControlsSingle_1 = __importDefault(require("../../components/ControlsSingle/ControlsSingle"));
const state_1 = __importDefault(require("../../globalState/state"));
const MobileMap_1 = __importDefault(require("../../components/MobileMap/MobileMap"));
const ApplyNowBtn_1 = __importDefault(require("../../components/ApplyNowBtn/ApplyNowBtn"));
const react_responsive_1 = require("react-responsive");
const ReturnBtn_1 = __importDefault(require("../../components/ReturnBtn/ReturnBtn"));
const DesktopContainer_1 = __importDefault(require("../../components/DesktopContainer/DesktopContainer"));
const SalaryBox_1 = __importDefault(require("../../components/SalaryBox/SalaryBox"));
const cutText_1 = require("../../helpers/editText/cutText");
const AttachedImages_1 = __importDefault(require("../../components/AttachedImages/AttachedImages"));
const AdditionalInfo_1 = __importDefault(require("../../components/AdditionalInfo/AdditionalInfo"));
const PostedDateBox_1 = __importDefault(require("../../components/PostedDateBox/PostedDateBox"));
const MySlider_1 = __importDefault(require("../../components/MySlider/MySlider"));
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const BenefitsList_1 = __importDefault(require("../../components/BenefitsList/BenefitsList"));
const Responsibilities_1 = __importDefault(require("../../components/Responsibilities/Responsibilities"));
const SingleItemPage = () => {
    const [items] = state_1.default.useGlobalState("items");
    const [singleItem, setSingleItem] = state_1.default.useGlobalState("singleItem");
    const isDesktop = (0, react_responsive_1.useMediaQuery)({ query: '(min-width: 1200px)' });
    const { itemId } = (0, react_router_dom_1.useParams)();
    (0, react_1.useEffect)(() => {
        if (!singleItem) {
            const currentItem = items === null || items === void 0 ? void 0 : items.find(elem => elem.id === itemId);
            setSingleItem(currentItem);
        }
    }, [itemId, setSingleItem, items, singleItem]);
    return (<>
        {singleItem && <>
        <section>
            <Container_1.default>
                <DesktopContainer_1.default>
                    <header className="header">
                        <h1 className="text-3xl font-bold ">Jobs details</h1>
                        {isDesktop && <ControlsSingle_1.default id={singleItem.id} inSingle={true}/>}
                    </header>
                    {isDesktop && <ApplyNowBtn_1.default />}
                </DesktopContainer_1.default>
            </Container_1.default>
        </section>
        <section className="pb-[86px] text-[#3A4562]">
            <Container_1.default>
                <DesktopContainer_1.default>
                    {!isDesktop && <ControlsSingle_1.default id={singleItem.id} inSingle={true}/>}
                    <div className="flex justify-between items-center lg:pt-[32px]">
                        <h2 className="text-2xl font-bold lg:w-[500px]">{singleItem.title}</h2>
                        {isDesktop && <SalaryBox_1.default salary={singleItem.salary}/>}
                    </div>
                    <div className="flex justify-between items-center lg:py-[7px]">
                        <PostedDateBox_1.default createdAt={singleItem.createdAt} big={true}/>
                        {!isDesktop && <SalaryBox_1.default salary={singleItem.salary}/>}
                    </div>
                    <p className="mainText pt-[14px] lg:py-[7px]">{(0, cutText_1.cutText)(singleItem.description, "Responsopilities")[0]}</p>
                    <Responsibilities_1.default description={singleItem.description} title={"Responsibilities"}/>
                    <BenefitsList_1.default description={singleItem.description} title={'Compensation & Benefits:'}/>
                    <div className=" flex justify-self-start mr-auto">
                        <ApplyNowBtn_1.default />
                    </div>
                </DesktopContainer_1.default>
            </Container_1.default>
        </section>
        <section className="pb-[60px] text-[#3A4562]">
            <Container_1.default>
                <DesktopContainer_1.default>
                    {!isDesktop && <MySlider_1.default pictures={singleItem.pictures}/>}
                    <h3 className="borderedTitle">Additional info</h3>
                    <AdditionalInfo_1.default employment={singleItem.employment_type} benefits={singleItem.benefits}/>
                    {isDesktop && <AttachedImages_1.default pictures={singleItem.pictures}/>}
                    {!isDesktop && <h3 className="borderedTitle">Contacts</h3>}
                    <MobileMap_1.default item={singleItem}/>
                </DesktopContainer_1.default>
                <ReturnBtn_1.default />
            </Container_1.default>
        </section></>}
        </>);
};
exports.default = SingleItemPage;
