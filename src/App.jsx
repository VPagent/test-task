// "use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = require("react");
const ClientRoutes_1 = __importDefault(require("./components/ClientRoutes/ClientRoutes"));
const state_1 = __importDefault(require("./globalState/state"));
const API_1 = require("./services/API");
const App = () => {
    const [items, setItems] = state_1.default.useGlobalState("items");
    (0, react_1.useEffect)(() => {
        if (!items) {
            try {
                (0, API_1.getAllItems)().then(res => { setItems(res); });
            }
            catch (error) {
                console.log(error.message);
            }
        }
    }, [items, setItems]);
    return (<> 
    {items && <ClientRoutes_1.default />}
    </>);
};
exports.App = App;
