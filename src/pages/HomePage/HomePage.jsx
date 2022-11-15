// "use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Container_1 = __importDefault(require("../../components/Container/Container"));
const ItemsList_1 = __importDefault(require("../../components/ItemsList/ItemsList"));
const PaginationBox_1 = __importDefault(require("../../components/PaginationBox/PaginationBox"));
const state_1 = __importDefault(require("../../globalState/state"));
const API_1 = require("../../services/API");
const HomePage = () => {
    const [items, setItems] = state_1.default.useGlobalState("items");
    const [page, setPage] = (0, react_1.useState)(1);
    (0, react_1.useEffect)(() => {
        try {
            (0, API_1.getAllItems)(page).then(res => { setItems(res); });
        }
        catch (error) {
            console.log(error.message);
        }
    }, [page, setItems]);
    return (<section className="pt-[20px] pb-[64px] bg-[#E6E9F2]">
            <Container_1.default>
                <ItemsList_1.default items={items}/>
                <PaginationBox_1.default page={page} setPage={setPage}/>
            </Container_1.default>
        </section>);
};
exports.default = HomePage;
