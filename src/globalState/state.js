// "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_hooks_global_state_1 = require("react-hooks-global-state");
const initialState = {
    singleItem: null,
    added: null,
    items: null
};
const { useGlobalState } = (0, react_hooks_global_state_1.createGlobalState)(initialState);
const store = { useGlobalState };
exports.default = store;
