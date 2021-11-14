"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TodoTextInput_1 = require("./TodoTextInput");
var Header = function (_a) {
    var addTodo = _a.addTodo;
    // 按下回车键 新增一条记录
    var handleSave = react_1.useCallback(function (text) {
        if (text.length === 0)
            return;
        addTodo(text); // addTodo 来自 App.tsx
    }, [addTodo]);
    return (react_1["default"].createElement("header", { className: 'header' },
        react_1["default"].createElement("h1", null, "todos"),
        react_1["default"].createElement(TodoTextInput_1["default"]
        //是否新建
        , { 
            //是否新建
            newTodo: true, 
            //绑定监听函数
            onSave: handleSave, 
            // 占位符 如果没有输入任务内容,则展示指定的占位符
            placeholder: 'what needs to be done' })));
};
exports["default"] = Header;
