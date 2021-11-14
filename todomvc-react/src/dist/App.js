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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var Header_1 = require("./Header");
var MainSection_1 = require("./MainSection");
var Footer_1 = require("./Footer");
var constants_1 = require("./constants");
function App() {
    var _a = react_1.useState(constants_1.INITIAL_STATE), todos = _a[0], setTodos = _a[1];
    var _b = react_1.useState("SHOW_ALL"), filter = _b[0], setFilter = _b[1];
    var _c = react_1.useState(0), completedCount = _c[0], setCompletedCount = _c[1];
    // 计算未完成的任务数量
    react_1.useEffect(function () {
        setCompletedCount(todos.reduce(function (count, todo) {
            return todo.completed ? count + 1 : count;
        }, 0));
    }, [todos]);
    // 新建一条记录
    var addTodo = react_1.useCallback(function (text) {
        var nextTodo = {
            id: Math.max.apply(Math, __spreadArrays(todos.map(function (todo) { return todo.id; }), [0])) + 1,
            text: text,
            completed: false
        };
        setTodos(__spreadArrays([nextTodo], todos));
    }, [todos]);
    // 删除指定的一条记录
    var deleteTodo = react_1.useCallback(function (id) {
        var nextTodos = todos.filter(function (todo) { return todo.id !== id; });
        setTodos(nextTodos);
    }, [todos]);
    // 编辑指定的记录
    var editTodo = react_1.useCallback(function (id, text) {
        var nextTodos = todos.map(function (todo) {
            return todo.id === id ? __assign(__assign({}, todo), { text: text }) : todo;
        });
        setTodos(nextTodos);
    }, [todos]);
    // 完成指定的记录
    var completeTodo = react_1.useCallback(function (id) {
        var nextTodos = todos.map(function (todo) {
            return todo.id === id ? __assign(__assign({}, todo), { completed: !todo.completed }) : todo;
        });
        setTodos(nextTodos);
    }, [todos]);
    // 完成全部任务
    var completeAll = react_1.useCallback(function () {
        var areAllMarked = todos.every(function (todo) { return todo.completed; });
        var nextTodos = todos.map(function (todo) {
            return __assign(__assign({}, todo), { completed: !areAllMarked });
        });
        setTodos(nextTodos);
    }, [todos]);
    var clearCompleted = react_1.useCallback(function () {
        var nextTodos = todos.filter(function (todo) { return todo.completed === false; });
        setTodos(nextTodos);
    }, [todos]);
    return (React.createElement("div", null,
        React.createElement(Header_1["default"], { addTodo: addTodo }),
        React.createElement(MainSection_1["default"], { todos: todos, filter: filter, actions: { deleteTodo: deleteTodo, editTodo: editTodo, completeTodo: completeTodo, completeAll: completeAll } }),
        todos.length > 0 && (React.createElement(Footer_1["default"], { completedCount: completedCount, activeCount: todos.length - completedCount, filter: filter, onClearCompleted: function () { return clearCompleted(); }, onShow: function (filter) { return setFilter(filter); } }))));
}
exports["default"] = App;
