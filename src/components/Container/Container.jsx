// "use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const container_module_scss_1 = __importDefault(require("./container.module.scss"));
const Container = ({ children }) => {
    return (<div className={container_module_scss_1.default.container}>
            {children}
        </div>);
};
exports.default = Container;
