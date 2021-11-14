"use strict";
exports.__esModule = true;
exports.FILTER_LIST = exports.FILTER_TITLE_MAP = exports.INITIAL_STATE = void 0;
//列表的初始值
exports.INITIAL_STATE = [
    {
        id: 0,
        text: "React TodoMVC",
        completed: false
    }
];
exports.FILTER_TITLE_MAP = {
    SHOW_ALL: "ALL",
    SHOW_ACTIVE: "Active",
    SHOW_COMPLETED: "Completed"
};
exports.FILTER_LIST = [
    "SHOW_ALL",
    "SHOW_ACTIVE",
    "SHOW_COMPLETED"
];
