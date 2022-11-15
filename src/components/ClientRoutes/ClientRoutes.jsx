"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const HomePage_1 = __importDefault(require("../../pages/HomePage/HomePage"));
const SingleItemPage_1 = __importDefault(require("../../pages/SingleItemPage/SingleItemPage"));
const ClientRoutes = () => {
    return (<react_router_dom_1.Routes>
            <react_router_dom_1.Route path="/" element={<HomePage_1.default />}/>
            <react_router_dom_1.Route path="/:itemId" element={<SingleItemPage_1.default />}/>
        </react_router_dom_1.Routes>);
};
exports.default = ClientRoutes;
