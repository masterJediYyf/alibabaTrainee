"use strict";
exports.__esModule = true;
var TodoList_1 = require("./TodoList");
var Toggler_1 = require("./Toggler");
function MainSection(_a) {
    var todos = _a.todos, filter = _a.filter, actions = _a.actions;
    var completedCount = todos.reduce(function (count, todo) {
        return todo.completed ? count + 1 : count;
    }, 0);
    return (React.createElement("section", { className: "main" },
        todos.length > 0 && (React.createElement(Toggler_1["default"], { checked: completedCount === todos.length, completeAll: actions.completeAll })),
        React.createElement(TodoList_1["default"], { todos: todos, filter: filter, actions: actions })));
}
exports["default"] = MainSection;
