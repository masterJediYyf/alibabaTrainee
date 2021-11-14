"use strict";
exports.__esModule = true;
var react_1 = require("react");
var classnames_1 = require("classnames");
function TodoTextInput(_a) {
    var placeholder = _a.placeholder, initialText = _a.text, onSave = _a.onSave, newTodo = _a.newTodo, _b = _a.editing, editing = _b === void 0 ? false : _b;
    var _c = react_1.useState(initialText), text = _c[0], setText = _c[1];
    // 回车键事件的监听函数
    var handleSubmit = react_1.useCallback(function (event) {
        var text = event.target.value.trim();
        // which 按键码
        if (event.which === 13) {
            onSave(text);
            if (newTodo) {
                setText("");
            }
        }
    }, [newTodo, onSave]);
    // 受控组件，当输入新数据时，执行该函数，更新输入框的 value 属性。
    var handleChange = react_1.useCallback(function (event) {
        setText(event.target.value);
    }, []);
    // 当输入框失去焦点时，触发该回调函数。
    var handleBlur = react_1.useCallback(function (event) {
        if (newTodo)
            return;
        onSave(event.target.value);
    }, [newTodo, onSave]);
    return (react_1["default"].createElement("input", { className: classnames_1["default"]({
            edit: editing,
            "new-todo": newTodo
        }), type: "text", placeholder: placeholder, 
        // 自动获取焦点
        autoFocus: true, 
        // 受控的值
        value: text || "", 
        // 失去焦点时
        onBlur: handleBlur, 
        // 输入内容时
        onChange: handleChange, 
        // 检测到键盘按键事件时
        onKeyDown: handleSubmit }));
}
exports["default"] = TodoTextInput;
