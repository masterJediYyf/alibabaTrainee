"use strict";
exports.__esModule = true;
var react_1 = require("react");
var classnames_1 = require("classnames");
var TodoTextInput_1 = require("./TodoTextInput");
function TodoItem(_a) {
    var todo = _a.todo, editTodo = _a.editTodo, completeTodo = _a.completeTodo, deleteTodo = _a.deleteTodo;
    var _b = react_1.useState(false), editing = _b[0], setEditing = _b[1];
    var handleDoubleClick = function () {
        setEditing(true);
    };
    var handleSave = function (id, text) {
        if (text.length === 0) {
            deleteTodo(id);
        }
        else {
            editTodo(id, text);
        }
        setEditing(false);
    };
    var element;
    if (editing) {
        element = (React.createElement(TodoTextInput_1["default"], { text: todo.text, editing: editing, onSave: function (text) { return handleSave(todo.id, text); } }));
    }
    else {
        element = (React.createElement("div", { className: "view" },
            React.createElement("input", { className: "toggle", type: "checkbox", checked: todo.completed, onChange: function () { return completeTodo(todo.id); } }),
            React.createElement("label", { onDoubleClick: handleDoubleClick }, todo.text),
            React.createElement("button", { className: "destroy", onClick: function () { return deleteTodo(todo.id); } })));
    }
    return (React.createElement("li", { className: classnames_1["default"]({
            completed: todo.completed,
            editing: editing
        }) }, element));
}
exports["default"] = TodoItem;
