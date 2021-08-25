"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const addToDo = () => {
    const [itemList, setItemList] = react_1.useState([]);
    const addItem = (item) => {
        if (!item) {
            return;
        }
        const newItemList = [...itemList, item];
        setItemList(newItemList);
    };
    return { addItem, itemList };
};
exports.default = addToDo;
//# sourceMappingURL=addToDo.js.map