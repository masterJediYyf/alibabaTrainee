"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var TodoItem_1 = require("./TodoItem");
var TODO_FILTERS = {
    SHOW_ALL: function () { return true; },
    SHOW_ACTIVE: function (todo) { return !todo.completed; },
    SHOW_COMPLETED: function (todo) { return todo.completed; }
};
function TodoList(_a) {
    var todos = _a.todos, filter = _a.filter, actions = _a.actions;
    // 遍历整个数组，根据指定的过滤条件，筛选出符合条件的记录，最后返回一个新数组。
    var filteredTodos = todos.filter(TODO_FILTERS[filter]);
    return (React.createElement("ul", { className: "todo-list" }, filteredTodos.map(function (todo) { return (
    // 单个任务组件
    React.createElement(TodoItem_1["default"], __assign({ key: todo.id, todo: todo }, actions))); })));
}
exports["default"] = TodoList;
